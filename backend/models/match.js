const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
	participantOne: {type: Schema.Types.ObjectId, ref: 'Competition.participants'},
	participantTwo: {type: Schema.Types.ObjectId, ref: 'Competition.participants'},
	participantOneScore: Number,
	participantTwoScore: Number
});

const Match = mongoose.model('Match', MatchSchema);
module.exports = Match;
