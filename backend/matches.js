const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = express.Router();

var MatchSchema = new Schema({
	teamOne: Schema.Types.ObjectId,
	teamTwo: Schema.Types.ObjectId,
	teamOneScore: Number,
	teamTwoScore: Number
});
var Match = mongoose.model('Match', MatchSchema);

router.get("/", async (req, res) => {
	try
	{
		const matches = await Match.find();
		res.send(matches);
	}
	catch
	{
		res.sendStatus(500);
	}
});

router.get("/:id", async (req, res) => {
	try
	{
		const match = await Match.findOne({_id: req.params.id});
		res.send(match);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.post("/", async (req, res) => {
	try
	{
		const match = await Match.create(req.body);
		res.send(match);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.put("/:id", async (req, res) => {
	try
	{
		const match = await Match.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.send(match);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	try
	{
		const match = await Match.findOneAndDelete({_id: req.params.id});
		res.send(match);
	}
	catch
	{
		res.sendStatus(400);
	}
});

module.exports = router;
