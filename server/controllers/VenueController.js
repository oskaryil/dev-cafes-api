const Venue = require("../models/venue");
const { ObjectID } = require("mongodb");

const addVenue = (req, res) => {
  let venue = new Venue({
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    options: {
      wifi: req.body.options.wifi,
      toilet: req.body.options.toilet
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

const removeVenue = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(400).send();
  }

  Venue.findOneAndRemove({
    _id: id
  })
    .then(venue => {
      if (!venue) {
        return res.status(404).send();
      }
      res.send({ venue });
    })
    .catch(e => {
      res.status(400).send();
    });
};

module.exports = { addVenue, getVenues, removeVenue };
