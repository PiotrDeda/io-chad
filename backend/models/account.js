const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const e = require('../config/errorMessages');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const emailRegex = /^[a-zA-Z\d.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?(?:\.[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?)*$/;

const AccountSchema = new Schema({
	email: {
		type: String,
		unique: [true, e.emailUnique],
		required: [true, e.emailRequired],
		dropDups: true,
		match: [emailRegex, e.emailInvalid]
	},
	login: {type: String, unique: [true, e.loginUnique], required: [true, e.loginRequired], dropDups: true},
	passwd: {type: String, required: [true, e.passwordRequired], select: false},
	tokens: {type: [{token: {type: String, required: [true, e.unexpected]}}], select: false},
	accountCreationDate: {type: Date, required: [true, e.unexpected], default: Date.now()},
	managedCompetitions: [{type: Schema.Types.ObjectId, ref: 'Competition'}]
});

AccountSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('passwd')) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.passwd, salt, function (err, hash) {
			if (err) return next(err);
			user.passwd = hash;
			next();
		});
	});
});

AccountSchema.methods.generateAuthToken = async function () {
	const accountWithoutTokens = await Account.findOne({_id: this._id});
	const token = jwt.sign(accountWithoutTokens.toJSON(), secret);
	const account = await Account.findOne({_id: this._id}).select('+tokens');
	account.tokens = account.tokens.concat({token});
	await account.save();
	return token;
};

AccountSchema.statics.findByCredentials = async (login, passwd) => {
	const account = await Account.findOne({login}).select('+passwd');
	if (!account) {
		throw new Error(e.loginFailed);
	}
	const isPasswordMatch = await bcrypt.compare(passwd, account.passwd);
	if (!isPasswordMatch) {
		throw new Error(e.loginFailed);
	}
	return Account.findOne({_id: account._id});
};

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
