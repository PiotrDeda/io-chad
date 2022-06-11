const Account = require('../models/account');
const e = require('../assets/errorMessages');

exports.register = async (req, res) => {
	try {
		const account = await Account.create(req.body);
		let data = await account.save();
		const token = await account.generateAuthToken();
		res.status(201).json({ data, token });
	} catch (err) {
		res.status(400).json({ err: err });
	}
};
exports.login = async (req, res) => {
	try {
		const login = req.body.login;
		const passwd = req.body.passwd;
		const account = await Account.findByCredentials(login, passwd);
		if (!account) {
			return res.status(401).json({ error: e.loginFailed });
		}
		const token = await account.generateAuthToken();
		res.status(201).json({ account, token });
	} catch (err) {
		res.status(400).json({ err: err });
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
			res.status(400).json({ error: e.logoutAlreadyDone });
		else
		{
			Account.updateOne({_id: req.userData._id}, {
				$pull: {
					tokens: {
						token: token
					}
				}
			}).then(() => {
				res.status(200).json({ message: e.logoutSuccess });
			}).catch(err => {
				res.status(400).json({ error: err });
			});
		}
	} catch (err) {
		res.status(400).json({ err: err });
	}
}

exports.delete = async (req, res) => {
	try {
		const account = await Account.findByIdAndDelete(req.userData._id);
		if (!account)
			res.status(400).json({ error: e.deleteError });
		else
			res.status(200).json({ message: e.deleteSuccess });
	} catch (err) {
		res.status(400).json({ err: err });
	}
}

/*router.put("/:id", async (req, res) => {
	try {
		const account = await Account.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.send(account);
	} catch {
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const account = await Account.findOneAndDelete({_id: req.params.id});
		res.send(account);
	} catch {
		res.sendStatus(400);
	}
});*/