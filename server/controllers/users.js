const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// @route POST  api/v1/users/login
// @description Authenticate user
// @access Public
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "Invalid credentials" }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to post user data" });
  }
};

// @route POST  api/v1/users/signup
// @description Sign up a new user
// @access      Public
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { username, email, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    return res.status(422).send({ title: "Invalid password", msg: "Password doesn't match confirmation password" });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({ title: "User already exists", msg: "Try another email" });
    }

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ title: "Server error", msg: "Unable to post user data" });
  }
};
