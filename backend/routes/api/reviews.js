const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");

const { Review, User } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      include: User,
    });
    return res.json(reviews);
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const review = await Review.create(req.body);
    const foundReview = await Review.findByPk(review.id, {
      include: User,
    });
    return res.json(foundReview);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);
    if (review.dataValues.userId !== req.user.id) throw new Error("Unauthorized");
    if (!review) throw new Error("Cannot find review");

    await Review.destroy({
      where: {
        id: reviewId,
        userId: req.user.id,
      },
    });
    return res.json(review);
  })
);

module.exports = router;
