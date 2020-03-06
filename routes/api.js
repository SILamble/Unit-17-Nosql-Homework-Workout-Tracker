const router = require("express").Router();
//require models folder. Contains Workout schema.
const Workout = require("../models/Workout.js")

//Routes to API, see template code in public folder for options
// /api/workouts, get, add & create

//Create(post) route, to create a new instance of workout class, using schema
//see MVP step 1, create a workout plan
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err =>
        res.json(err))
});

//Update(put) route, to to update a previously created workout instance, using schema
//see MVP step 2, add to a previous workout plan

router.put("/api/workouts/:id", ({body, params}, res) =>{
    Workout.findWorkoutbyID(
        params.id,
        {$push: {exercises: body}}
    ).then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router;