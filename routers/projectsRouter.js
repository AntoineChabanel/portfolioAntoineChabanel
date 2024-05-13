const express = require('express');
const controller = require('../controllers/projectsController');

const router = express.Router();

// Route GET pour la page d'accueil
router.get('/', controller.showProjects);

// Route GET pour une page de projet spécifique
router.get('/:name', controller.showProjectByName);

module.exports = router;