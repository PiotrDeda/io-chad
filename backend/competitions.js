const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = express.Router();

var StageSchema = new Schema({
	name: String,
	type: String,
	properties: [],
	matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

var ParticipantSchema = new Schema({
	number: Number,
	name: String
});

var CompetitionSchema = new Schema({
	name: String,
	game: String,
	type: String,
	stages: [StageSchema],
	participants: [ParticipantSchema]
});
var Competition = mongoose.model('Competition', CompetitionSchema);

router.get("/", async (req, res) => {
	try
	{
		const competitions = await Competition.find();
		res.send(competitions);
	}
	catch
	{
		res.sendStatus(500);
	}
});

router.get("/:id", async (req, res) => {
	try
	{
		const competition = await Competition.findOne({_id: req.params.id});
		res.send(competition);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.post("/", async (req, res) => {
	try
	{
		const competition = await Competition.create(req.body);
		res.send(competition);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.put("/:id", async (req, res) => {
	try
	{
		const competition = await Competition.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.send(competition);
	}
	catch
	{
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	try
	{
		const competition = await Competition.findOneAndDelete({_id: req.params.id});
		res.send(competition);
	}
	catch
	{
		res.sendStatus(400);
	}
});

module.exports = router;
