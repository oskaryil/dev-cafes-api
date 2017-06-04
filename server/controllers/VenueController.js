const Venue = require('../models/venue');

const addVenue = (req, res) => {
	let venue = new Venue({
		name: req.body.name,
		adress: req.body.adress,
		description: req.body.description,
		options: {
			wifi: true,
			toilet: true
		},
		image: req.body.image
	});

	venue.save().then(
		doc => {
			res.send(doc);
		},
		e => {
			res.status(400).send(e);
		}
	);
	// venue.save(err => {
	// 	if (err) {
	// 		return res.status(400).send(err);
	// 	}
	// 	res.send(doc);
	// });
};

const getVenues = (req, res) => {
	Venue.find().then(
		venues => {
			res.send({ venues });
		},
		e => {
			res.status(400).send(e);
		}
	);
};

module.exports = { addVenue, getVenues };
