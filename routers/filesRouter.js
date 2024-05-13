const express = require('express');
const controller = require('../controllers/filesController');

const router = express.Router();

//Download CV
router.get('/download/CV', controller.downloadCV);

module.exports = router;