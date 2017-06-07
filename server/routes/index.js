const express = require('express');
const router = express.Router();

//Controllers
const VenueController = require('../controllers/VenueController');

router
	.route('/venues')
	.post(VenueController.addVenue)
	.get(VenueController.getVenues);

router.route('/venue/:id').delete(VenueController.removeVenue);
module.exports = router;
