const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const accountController = require('../controllers/account');

router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.get('/profile', auth, accountController.profile);
router.delete('/logout', auth, accountController.logout);
router.delete('/delete', auth, accountController.delete);
router.put('/changepassword', auth, accountController.changePassword);

module.exports = router;
