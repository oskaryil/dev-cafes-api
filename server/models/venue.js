const mongoose = require("mongoose");

const Venue = mongoose.model("Venue", {
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    lat: {
      type: Number,
      required: false
    },
    lng: {
      type: Number,
      required: false
    }
  },
  address: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  options: {
    wifi: {
      type: Boolean,
      required: false
    },
    toilet: {
      type: Boolean,
      required: false
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Venue;
