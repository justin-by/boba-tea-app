const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const  { requireAuth }  = require('../../utils/auth')

// Import database stuff
const { Drink } = require('../../db/models')

// Create the API route
router.get('/', asyncHandler(async(req, res) => {
    const drinks = await Drink.findAll();
    return res.json(drinks)
}));

router.get('/users/:id', requireAuth, asyncHandler(async(req, res) => {
    const id = req.params.id;
    const drinks = await Drink.findAll({
        where: {
            userId: id
        }
    });
    return res.json(drinks)
}));


router.post('/', asyncHandler(async(req, res) => {
    const drink = await Drink.create(req.body)
    return res.json(drink)
}))

router.delete('/:id', requireAuth, asyncHandler(async(req, res) => {

    const drinkId = req.params.id
    const drink = await Drink.findByPk(drinkId)
    if (drink.userId !== req.user.id) throw new Error('Unauthorized')
    if (!drink) throw new Error('Cannot find drink')

    await Drink.destroy({
        where: {
            id: drinkId,
            userId: req.user.id
        }
    }
    )
    return res.json(drink)
}))

router.put('/:id', requireAuth, asyncHandler(async(req, res) => {
    const drinkId = req.params.id
    await Drink.update(req.body, {
        where: {
            id: drinkId,
            userId: req.user.id
        }
    })

    const drink = await Drink.findByPk(drinkId)
    return res.json(drink);
}))

module.exports = router;
