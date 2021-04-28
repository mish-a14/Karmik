const express = require('express')
const router = express.Router(); 
const boardCtrl = require('../../controllers/boards');

// POST / API
router.post('/', boardCtrl.create)

module.exports = router; 