const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const competitionController = require('../controllers/competition');

router.post('/', auth, competitionController.post);
router.get('/', auth, competitionController.getAll);
router.get('/:id', auth, competitionController.get);
router.delete('/', auth, competitionController.delete);
router.put('/', auth, competitionController.put);

module.exports = router;
