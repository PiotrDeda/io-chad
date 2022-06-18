const Competition = require('../models/competition');
const e = require('../config/errorMessages');

exports.post = async (req, res) => {
	try {
		const newCompetitionJson = req.body;
		newCompetitionJson.owner = req.userData._id;
		const competition = await Competition.create(newCompetitionJson);
		let data = await competition.save();
		res.status(201).json({_id: data._id});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.getAll = async (req, res) => {
	try {
		const competitions = await Competition.find({owner: req.userData._id});
		res.status(200).json({competitions});
	} catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.get = async (req, res) => {
	try {
		const competition = await Competition.findById(req.params.id);
		if (!competition)
			res.status(404).json({error: e.competitionNotFound});
		else if (competition.owner.toString() !== req.userData._id.toString())
			res.status(401).json({error: e.notAuthorized});
		else
			res.status(200).json({competition});
	}
	catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.delete = async (req, res) => {
	try {
		const competition = await Competition.findById(req.params.id);
		if (!competition)
			res.status(404).json({error: e.competitionNotFound});
		else if (competition.owner.toString() !== req.userData._id.toString())
			res.status(401).json({error: e.notAuthorized});
		else
			await competition.remove();
		res.status(200).json({message: e.competitionDeleted});
	}
	catch (err) {
		res.status(400).json({err: err.message});
	}
}

exports.put = async (req, res) => {
	try {
		const competition = await Competition.findById(req.params.id);
		if (!competition)
			res.status(404).json({error: e.competitionNotFound});
		else if (competition.owner.toString() !== req.userData._id.toString())
			res.status(401).json({error: e.notAuthorized});
		else
			await competition.updateOne(req.body);
		res.status(200).json({message: e.competitionUpdated});
	}
	catch (err) {
		res.status(400).json({err: err.message});
	}
}
