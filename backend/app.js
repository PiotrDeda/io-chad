const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const port = 8000

// Init

const mongoDB = 'mongodb+srv://admin:admin@io-chad.elbrc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(express.json());
app.listen(port, () => console.log("Node Express server listening at port " + port))

// Models

var AccountSchema = new Schema({
	email: String,
	login: String,
	passwd: String,
	birthDate: Date,
	accountCreationDate: { type: Date, default: Date.now() },
	managedCompetitions: [Schema.Types.ObjectId]
})
var Account = mongoose.model('AccountModel', AccountSchema);

var CompetitionSchema = new Schema({
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
var Competition = mongoose.model('CompetitionModel', CompetitionSchema);

var MatchSchema = new Schema({
	teamOne: Schema.Types.ObjectId,
	teamTwo: Schema.Types.ObjectId,
	teamOneScore: Number,
	teamTwoScore: Number
})
var Match = mongoose.model('MatchModel', MatchSchema);

// REST

app.get("/accounts", async (req, res) => {
	const accounts = await Account.find();
	res.send(accounts);
})

app.get("/accounts/:id", async (req, res) => {
	try
	{
		const account = await Account.findOne({_id: req.params.id});
		res.send(account);
	}
	catch
	{
		res.sendStatus(404);
	}
})

app.post("/accounts", async (req, res) => {
	const account = await Account.create(req.body);
	res.send(account);
})

app.put("/accounts/:id", async (req, res) => {
	const account = await Account.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
	res.send(account);
})

app.delete("/accounts/:id", async (req, res) => {
	const account = await Account.findOneAndDelete({_id: req.params.id});
	res.send(account);
})

// TODO: move to a separate router
// TODO: implement Competition and Match