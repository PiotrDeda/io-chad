const Competition = require('../models/competition');

/*router.get("/", async (req, res) => {
	try {
		const competitions = await Competition.find();
		res.send(competitions);
	} catch {
		res.sendStatus(500);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const competition = await Competition.findOne({_id: req.params.id});
		res.send(competition);
	} catch {
		res.sendStatus(400);
	}
});

router.post("/", async (req, res) => {
	try {
		const competition = await Competition.create(req.body);
		res.send(competition);
	} catch {
		res.sendStatus(400);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const competition = await Competition.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
		res.send(competition);
	} catch {
		res.sendStatus(400);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const competition = await Competition.findOneAndDelete({_id: req.params.id});
		res.send(competition);
	} catch {
		res.sendStatus(400);
	}
});*/