const jwt = require('jsonwebtoken');
const secret = require('./secret')
const e = require('../assets/errorMessages');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '');
		req.userData = jwt.verify(token, secret);
		next();
	} catch (err) {
		return res.status(401).json({message: e.authenticationFailed});
	}
};