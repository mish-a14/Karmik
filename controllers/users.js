const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  login
};

async function create(req, res) {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (req.body.password !== user.password) throw new Error();

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.json(token);
  } catch {
    res.status(400).json("Bad Credentials");
  }
}
