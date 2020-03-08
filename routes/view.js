const router = require("express").Router();
const path = require("path");

//route to HTML page for adding a new exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// route to HTML page for stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router;
