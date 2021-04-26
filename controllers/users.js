const User = require('../models/user');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6; 

module.exports = {
  create,
  login
};

async function create(req, res) {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    const user = await User.create({name: req.body.name, email:req.body.email, password:hashedPassword,});

    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.status(200).json(token); 
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(req.body)
    console.log(user)
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.status(200).json(token);  
  } catch (err) {  
    res.status(400).json('Bad Credentials');
  }
}