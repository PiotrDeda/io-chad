const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const e = require('../config/errorMessages');

const ParticipantSchema = new Schema({
	name: {type: String, required: [true, e.participantNameRequired]},
});

const MatchSchema = new Schema({
	participantOne: {
		type: Schema.Types.ObjectId,
		ref: 'Competition.participants'
	},
	participantTwo: {
		type: Schema.Types.ObjectId,
		ref: 'Competition.participants'
	},
	participantOneScore: Number,
	participantTwoScore: Number,
	date: String,
	notes: String,
});

const StageSchema = new Schema({
	number: {type: Number, required: [true, e.stageNumberRequired], default: 1},
	matches: [MatchSchema]
});

const CompetitionSchema = new Schema({
	owner: {type: Schema.Types.ObjectId, ref: 'Account.users', required: [true, e.unexpected]},
	name: {type: String, required: [true, e.competitionNameRequired]},
	game: {type: String, required: [true, e.competitionGameRequired]},
	type: {type: String, required: [true, e.competitionTypeRequired]},
	directMatchesCount: {type: Number, default: 1},
	winPoints: {type: Number, default: 3},
	drawPoints: {type: Number, default: 1},
	losePoints: {type: Number, default: 0},
	scoreTieResolution: {type: String, default: 'Bilans bramkowy'},
	stages: [StageSchema],
	participants: [ParticipantSchema]
});

const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;
