const express = require("express");
const { loginUser, registerUser, getUserProfileLogin, logoutUser, forgotPassword, resetPassword } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").put(resetPassword);
router.route("/user/me").get(isAuthenticatedUser, getUserProfileLogin);
router.route("/logout").get(isAuthenticatedUser, logoutUser);


module.exports = router;
