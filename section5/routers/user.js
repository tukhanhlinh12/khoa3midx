const express = require("express");
const {
  getAllRestaurant,
  getZipCode,
  getCuisine,
  getBorough,
  getBoroughs,
  getCuisineChicken,
  getStreet,
  getScore,
  getRate,
  getMaxScore,
} = require("../controller/userController.js");

const router = express.Router();

router.get("/", getAllRestaurant);

router.get("/:zip", getZipCode);

router.get("/:cuisine", getCuisine);

router.get("/:borough", getBorough);

router.get("/:borough", getBoroughs);

router.get("/:cuisine", getCuisineChicken);

router.get("/:street", getStreet);

router.get("/:score", getScore);

router.get("/:rate", getRate);

router.get("/:score", getMaxScore);

module.exports = router;
