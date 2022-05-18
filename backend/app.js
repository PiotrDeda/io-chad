var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoDB = 'mongodb+srv://admin:admin@io-chad.elbrc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var AccountSchema = new Schema({
	_id: Schema.Types.ObjectId,
	email: String,
	login: String,
	passwd: String,
	birthDate: Date,
	accountCreationDate: { type: Date, default: Date.now() },
	managedCompetitions: [Schema.Types.ObjectId]
})
var AccountModel = mongoose.model('AccountModel', AccountSchema);

var CompetitionSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	game: String,
	type: String,
	stages: [
		{
			name: String,
			type: String,
			properties: [],
			matches: [Schema.Types.ObjectId]
		}
	],
	participants: [ { id: Schema.Types.ObjectId, nick: String } ],
	teams: [
		{
			id: Schema.Types.ObjectId,
			name: String,
			members: { id: Schema.Types.ObjectId, nick: String }
		}
	]
	
})
var CompetitionModel = mongoose.model('CompetitionModel', CompetitionSchema);

var MatchSchema = new Schema({
	_id: Schema.Types.ObjectId,
	teamOne: Schema.Types.ObjectId,
	teamTwo: Schema.Types.ObjectId,
	teamOneScore: Number,
	teamTwoScore: Number
})
var MatchModel = mongoose.model('MatchModel', MatchSchema);