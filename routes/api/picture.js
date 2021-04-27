const express = require('express')
const router = express.Router(); 
const pictureCtrl = require('../../controllers/picture.js');

// POST / API
router.post('/', pictureCtrl.create)

module.exports = router; 