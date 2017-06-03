const express = require('express');

const router = require(express.Router());

//Controllers
const VenueController = require('../controllers/VenueController');

router.route('/venues').post();
