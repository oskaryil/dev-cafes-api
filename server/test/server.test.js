const expect = require('expect');
const request = require('supertest');

const indexRoute = require('./../routes/');
const { app } = require('./../server');
const { Venue } = require('./../models/venue');
const { populateVenues, venues } = require('./seed/seed');

beforeEach(populateVenues);

describe('POST /venues', () => {
	it('should create a new venue', done => {
		let venue = {
			name: 'Espresso ShitHouse 3',
			image: 'https://espressohouse.com/app/uploads/2016/04/banner_skiss_02.jpg',
			address: 'Östermalmstorg',
			description: 'Shitty Café with bad hot cocoa',
			wifi: false,
			toilet: false
		};

		request(app)
			.post('/venues')
			.send(venue)
			.expect(200)
			.expect(res => {
				expect(res.body).toInclude(venue);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				Venue.find(venue.name)
					.then(venues => {
						expect(venues.length).toBe(3);
						expect(venues[2]).toInclude(venue);
						done();
					})
					.catch(e => done(e));
			});
	});

	it('should not create venue with invalid body data', done => {
		request(app).post('/venues').send({}).expect(400).end((err, res) => {
			if (err) {
				return done(err);
			}

			Venue.find()
				.then(venues => {
					expect(venues.length).toBe(2);
					done();
				})
				.catch(e => done(e));
		});
	});
});

// descrie('GET /venues', () => {
// 	it('should ');
// });
