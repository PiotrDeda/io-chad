const Account = require('../models/account');
const e = require('../config/errorMessages');

exports.register = async (req, res) => {
	try {
		const account = await Account.create(req.body);
		let data = await account.save();
		const token = await account.generateAuthToken();
		res.status(201).json({token});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
};
exports.login = async (req, res) => {
	try {
		const login = req.body.login;
		const passwd = req.body.passwd;
		const account = await Account.findByCredentials(login, passwd);
		if (!account) {
			return res.status(401).json({err: e.loginFailed});
		}
		const token = await account.generateAuthToken();
		res.status(201).json({token});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
};
exports.profile = async (req, res) => {
	await res.json(req.userData);
};

exports.logout = async (req, res) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '');
		const tokenExists = await Account.exists({
			_id: req.userData._id,
			'tokens.token': token
		});
		if (!tokenExists)
			res.status(400).json({err: e.logoutAlreadyDone});
		else {
			Account.updateOne({_id: req.userData._id}, {
				$pull: {
					tokens: {
						token: token
					}
				}
			}).then(() => {
				res.status(200).json({message: e.logoutSuccess});
			}).catch(err => {
				res.status(400).json({err: err.message});
			});
		}
	} catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.delete = async (req, res) => {
	try {
		const account = await Account.findByIdAndDelete(req.userData._id);
		if (!account)
			res.status(400).json({err: e.accountDeleteFailed});
		else
			res.status(200).json({message: e.accountDeleteSuccess});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.changePassword = async (req, res) => {
	try {
		const account = await Account.findByCredentials(req.userData.login, req.body.oldPasswd);
		if (!account)
			return res.status(400).json({err: e.changePasswordWrongOldPassword});
		account.passwd = req.body.newPasswd;
		await account.save();
		res.status(200).json({message: e.changePasswordSuccess});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
}
