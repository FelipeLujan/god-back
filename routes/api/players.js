const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const Player = require("../../models/Player");
// get scores of each of the users that have played
router.post(
  "/",
  [
    check("player1", "please insert the name of player 1.")
      .not()
      .isEmpty(),
    check("player2", "please insert the name of player 2")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { player1, player2 } = req.body;

    try {
      let find_player1 = await Player.findOne({ name: player1 });
      let find_player2 = await Player.findOne({ name: player2 });
      if (!find_player1) {
        let newPlayer = new Player({ name: player1 });
        await newPlayer.save()
      }
      if (!find_player2) {
        let newPlayer = new Player({ name: player2 });
        await newPlayer.save()
      }
    } catch (e) {}
    console.log(req.body);
    return res.send("receivedd");
  }
);

module.exports = router;
