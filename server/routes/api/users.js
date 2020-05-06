const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { login, signup, success } = require("../../controllers/users");
const auth = require("../../middleware/auth");

router.get("/success", auth, success);

router.post("/login", [check("email", "Please include a valid email").isEmail(), check("password", "Password is required").exists()], login);

router.post("/signup", [check("username", "Username is required").not().isEmpty(), check("email", "Please include a valid email").isEmail(), check("password", "Password minimum length is 8").isLength({ min: 8 })], signup);

module.exports = router;
