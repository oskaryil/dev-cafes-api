const { ObjectID } = require('mongodb');

const { Venue } = require('./../../models/venue');

venues = [
	{
		name: 'Espresso ShitHouse 1',
		image: 'https://espressohouse.com/app/uploads/2016/04/banner_skiss_02.jpg',
		address: 'Östermalmstorg',
		description: 'Shitty Café with bad hot cocoa',
		wifi: false,
		toilet: false,
		_id: new ObjectID()
	},
	{
		name: 'Espresso ShitHouse 2',
		image: 'https://espressohouse.com/app/uploads/2016/04/banner_skiss_02.jpg',
		address: 'Östermalmstorg',
		description: 'Shitty Café with bad hot cocoa',
		wifi: false,
		toilet: false
	}
];

const populateVenues = done => {
	Venue.remove({})
		.then(() => {
			return Venue.insertMany(venues);
		})
		.then(() => done());
};

module.exports = { populateVenues, venues };
