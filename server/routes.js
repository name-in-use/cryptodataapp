const express = require("express");
const router = express.Router();
const { getCoins, getCoinById } = require("./api");

// Route for getting list of coins
router.get("/coins", async (req, res) => {
  try {
    const coins = await getCoins();
    res.render("coins", { coins });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for getting details of a specific coin
router.get("/coins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coin = await getCoinById(id);
    res.render("coinDetails", { coin });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;