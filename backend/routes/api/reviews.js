const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const  { requireAuth }  = require('../../utils/auth')

const { Review, User } = require('../../db/models')

router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        include: User
    });
    return res.json(reviews);
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const review = await Review.create(req.body);
    return res.json(review);
}))

module.exports = router;
