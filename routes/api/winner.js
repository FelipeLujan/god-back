const express = require("express");
const router = express.Router();
const Player = require("../../models/Player");

// get scores of each of the users that have played
router.put("/", async (req, res) => {
  let { winner } = req.body;
  try {
    let currentScore = await Player.findOne({ name: winner });
    let newScore = (await currentScore.victories) + 1;
    Player.findOneAndUpdate({ name: winner }, { victories: newScore }).then(
      updated => {
        console.log(updated);
        res.send(`${winner}'s score updated to ${newScore}`);
      }
    );
  } catch (e) {
    res.status(404).send("We couldn't find a user with this name");
    console.log(e);
  }
});

module.exports = router;
