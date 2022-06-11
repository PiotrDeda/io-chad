const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StageSchema = new Schema({
	name: String,
	type: String,
	properties: [],
	matches: [{type: Schema.Types.ObjectId, ref: 'Match'}]
});

const ParticipantSchema = new Schema({
	number: Number,
	name: String
});

const CompetitionSchema = new Schema({
	name: String,
	game: String,
	type: String,
	stages: [StageSchema],
	participants: [ParticipantSchema]
});

const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;
