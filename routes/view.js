const router = require("express").Router();
const path = require("path");

//route to adding a new workout
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

module.exports = router;
