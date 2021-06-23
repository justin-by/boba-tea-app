const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const drinksRouter = require('./drinks.js')
const reviewsRouter = require('./reviews.js')
const asyncHandler = require("express-async-handler");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/drinks", drinksRouter)
router.use("/reviews", reviewsRouter)


module.exports = router;
