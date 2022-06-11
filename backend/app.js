const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const accountRouter = require('./routes/account');
const competitionRouter = require('./routes/competition');
const matchRouter = require('./routes/match');
const port = 8000;

const mongoDB = 'mongodb+srv://admin:admin@io-chad.elbrc.mongodb.net/IO-CHAD?retryWrites=true&w=majority';
mongoose.connect(mongoDB).then(_ => console.log('Connected to MongoDB')).catch(err => console.log(err));

const app = express();
app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000'
}));
app.use(morgan('dev'));

app.use('/accounts', accountRouter)
app.use('/competitions', competitionRouter)
app.use('/matches', matchRouter)

app.listen(port, () => console.log("Node Express server listening at port " + port))
