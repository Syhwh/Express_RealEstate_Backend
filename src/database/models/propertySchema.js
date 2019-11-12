const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
  propertyUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  propertyTitle: {
    type: String,
    require: true
  },
  propertyDescription: {
    type: String,
    require: true
  },
  propertyPrice: {
    type: Number,
    require: true
  },
  propertyLocation: {
    neighborhood: {
      type: String,
      require: true
    },
    country: {
      type: String,
      require: true
    },
    state: {
      type: String,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    zipCode: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    // coordenates: {
    //   type: Number,
    //   require: true
    // },
  },
  propertyType: {
    type: String,
    require: true
  },
  propertyStatus: {
    type: String,
    require: true
  },
  propertyDetails: {
    area: {
      type: Number,
      require: true
    },
    rooms: {
      type: Number,
      require: true
    },
    bedrooms: {
      type: Number,
      require: true
    },
    bathrooms: {
      type: Number,
      require: true
    },
    garages: {
      type: Number,
      require: true
    },
  },
  // propertyAmmenities: {
  //   type: Array,
  //   require: true
  // },
  // propertyGallery: {
  //   type: Array
  // }
});

module.exports = mongoose.model('Property', propertySchema);

