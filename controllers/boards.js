const BoardModel = require("../models/board.js");

module.exports = {
  create,
  boardIndex,
  boardModify,
  boardDelete
};
// we want the board to be added to the DataBase

// create a new board
//TODO: make a create board Logic
async function create(req, res) {
  // board.create and then put in the database
  try {
    await BoardModel.create({
      name: req.body.name,
      pictures: req.body.pictures,
      user: req.user._id
    });

    res.status(200).json("Added a new board");
  } catch (err) {
    res.status(400).json(err);
  }
}

// fetch one of the boards
//TODO: make a fetch request to bring the board to us
// config auth js takes the token
async function boardIndex(req, res) {
  try {
    let board = await BoardModel.find({ user: req.user._id })
      .populate()
      .exec();
    res.status(200).json(board);
  } catch (err) {
    res.status(400).json(err);
  }
}

// modify board
// TODO: make modify function for the board
async function boardModify(req, res) {
  try {
    console.log(req.body);
    let board = await BoardModel.findOneAndUpdate({ board: req.body.board });
  } catch (e) {
    res.status(400).json(e);
  } finally {
    console.log("Finished the boardModify function");
  }
}

// Delete the board
// TODO: Make a delete function for the board

async function boardDelete(req, res) {
  try {
    let board = await BoardModel.deleteOne({ board: req.body.board });
  } catch (e) {
    res.status(400).json(e);
  } finally {
    alert("Finished the boardDelete function");
  }
}
