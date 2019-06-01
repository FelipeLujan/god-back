const express = require("express");
const router = express.Router();
const Player = require("../../models/Player");

// get scores of each of the users that have played
router.get("/", async (req, res) => {
  try {
    const scoreboard = await Player.find().populate("player", [
      "name",
      "victories"
    ]);
    res.json(scoreboard);
  } catch (e) {
    res.status(500).send("server error");
  }
  return res.send("scoreboard route");
});

module.exports = router;
