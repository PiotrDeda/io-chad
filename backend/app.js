const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const accounts = require('./accounts');
const competitions = require('./competitions');
const matches = require('./matches');
const port = 8000;

const mongoDB = 'mongodb+srv://admin:admin@io-chad.elbrc.mongodb.net/IO-CHAD?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000'
}));
app.listen(port, () => console.log("Node Express server listening at port " + port))

app.use('/accounts', accounts)
app.use('/competitions', competitions)
app.use('/matches', matches)
