const express = require('express');
<<<<<<< HEAD

const router = require(express.Router());
=======
const { mongoose } = require('../db/mongoose');

const router = express.Router();
>>>>>>> 9958e767e0769d54ce7cffe8a3a60b907b3e4c05

//Controllers
const VenueController = require('../controllers/VenueController');

<<<<<<< HEAD
router.route('/venues').post();
=======
router
	.route('/venues')
	.post(VenueController.addVenue)
	.get(VenueController.getVenues);

router.route('/venue/:id').delete(VenueController.removeVenue);
module.exports = router;
>>>>>>> 9958e767e0769d54ce7cffe8a3a60b907b3e4c05
