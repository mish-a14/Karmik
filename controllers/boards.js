const BoardModel = require('../models/board.js');

module.exports = {
    create, 
    boardIndex,
}
// we want the board to be added to the DataBase

// create a new board
//TODO make a create board Logic
async function create (req, res) {
    // board.create and then put in the database
    try {
        console.log(req.user)
    await BoardModel.create(
        {   name: req.body.name,
            pictures: req.body.pictures,
            user: req.user._id})

            res.status(200).json("let's see if this works")
        } catch(err) {
        res.status(400).json(err);
        }
}


// fetch one of the boards

async function boardIndex(req, res) {
    try {
        console.log("WE HATE REACT")
        let board = await BoardModel.find({user: req.user._id}).populate().exec()
        console.log("ONLY ALEX LOVES REACT :P")
        console.log(board)
        res.status(200).json(board)
    } catch(err) {
        res.status(400).json(err);
    }
}
 
//TODO make a fetch request to bring the board to us 

// config auth js takes the token 