const express = require("express");
const router = express.Router();
const boardCtrl = require("../../controllers/boards");
router.use(require("../../config/auth"));

// POST / API / board
router.post("/", boardCtrl.create);
// GET / api / boardform
router.get("/", boardCtrl.boardIndex);

module.exports = router;
