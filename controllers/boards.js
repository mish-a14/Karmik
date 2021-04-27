const BoardModel = require('../models/board.js');

module.exports = {
    create
}
// we want the board to be added to the DataBase

// create a new board
//TODO make a create board Logic
async function create (req, res) {
    console.log(req.body)
    // board.create and then put in the database
    try {
    await BoardModel.create(
        {   name: req.body.name,
            pictures: req.body.pictures,
            users: req.body.users })

            res.status(200).json("let's see if this works")
        } catch(err) {
        res.status(400).json(err);
        }
}


// fetch one of the boards

//TODO make a fetch request to bring the board to us 

