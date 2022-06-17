const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const e = require('../config/errorMessages');

const ParticipantSchema = new Schema({
	number: Number,
	name: {type: String, required: [true, e.participantNameRequired]},
});

const MatchSchema = new Schema({
	participantOne: {type: Schema.Types.ObjectId, ref: 'Competition.participants', required: [true, e.participantRequired]},
	participantTwo: {type: Schema.Types.ObjectId, ref: 'Competition.participants', required: [true, e.participantRequired]},
	participantOneScore: {type: Number, required: [true, e.scoreRequired]},
	participantTwoScore: {type: Number, required: [true, e.scoreRequired]},
});

const StageSchema = new Schema({
	name: {type: String, required: [true, e.stageNameRequired]},
	type: {type: String, required: [true, e.stageTypeRequired]},
	properties: [],
	matches: [MatchSchema]
});

const CompetitionSchema = new Schema({
	owner: {type: Schema.Types.ObjectId, ref: 'Account.users', required: [true, e.unexpected]},
	name: {type: String, required: [true, e.competitionNameRequired]},
	game: {type: String, required: [true, e.competitionGameRequired]},
	type: {type: String, required: [true, e.competitionTypeRequired]},
	stages: [StageSchema],
	participants: [ParticipantSchema]
});

const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;
