const express = require("express");
const router = express.Router();
const boardCtrl = require("../../controllers/boards");
router.use(require("../../config/auth"));

// POST  / create new board
router.post("/", boardCtrl.create);

// GET  / get the boards
router.get("/", boardCtrl.boardIndex);

// POST /api/board/change / modify the board
router.post("/change", boardCtrl.boardModify);

module.exports = router;
