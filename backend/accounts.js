const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = express.Router();

var AccountSchema = new Schema({
	email: String,
	login: String,
	passwd: String,
	birthDate: Date,
	accountCreationDate: { type: Date, default: Date.now() },
	managedCompetitions: [{ type: Schema.Types.ObjectId, ref: 'Competition' }]
});
var Account = mongoose.model('Account', AccountSchema);

router.get("/", async (req, res) => {
	try
	{
		const accounts = await Account.find();
		res.send(accounts);
	}
	catch
	{
		res.sendStatus(500);
	}
});

router.get("/:id", async (req, res) => {
	try
	{
		const account = await Account.findOne({_id: req.params.id});
		res.send(account);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.post("/", async (req, res) => {
	try
	{
		const account = await Account.create(req.body);
		res.send(account);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.put("/:id", async (req, res) => {
	try
	{
		const account = await Account.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.send(account);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	try
	{
		const account = await Account.findOneAndDelete({_id: req.params.id});
		res.send(account);
	}
	catch
	{
		res.sendStatus(400);
	}
});

module.exports = router;
