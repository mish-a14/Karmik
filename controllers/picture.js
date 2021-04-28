const PictureModel = require("../models/picture.js");

module.exports = {
  create
};
// we want the pictures to be added to the DataBase

// create a new pictures
//TODO make a create pictures Logic
async function create(req, res) {
  console.log(req.body);
  // pictures.create and then put in the database
  try {
    await PictureModel.create({
      name: req.body.name,
      board: req.body.board,
      url: req.body.url
    });

    res.status(200).json("let's see if this works");
  } catch (err) {
    res.status(400).json(err);
  }
}

// fetch one of the pictures

//TODO make a fetch request to bring the pictures to us
