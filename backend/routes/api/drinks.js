const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

// Import database stuff
const { Drink } = require('../../db/models')

// Create the API route
router.get('/', asyncHandler(async(req, res) => {
    console.log('We also got here')
    const drinks = await Drink.findAll();
    console.log(drinks)
    return res.json(drinks)
}));

module.exports = router;
