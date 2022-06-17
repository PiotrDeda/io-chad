const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const competitionController = require('../controllers/competition');

router.post('/competitions', auth, competitionController.post);
router.get('/competitions', auth, competitionController.getAll);
router.get('/competitions/:id', auth, competitionController.get);
router.delete('/competitions', auth, competitionController.delete);
router.put('/competitions', auth, competitionController.put);

module.exports = router;
