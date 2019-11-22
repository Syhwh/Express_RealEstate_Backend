const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const agencySchema = mongoose.Schema({
  agencyName: {
    type: String,

  },
  agencyDescription: {
    type: String,
  },
  agencyAddress1: {
    type: String,
  },
  agencyAddress2: {
    type: String,
  },
  agencyEmail: {
    type: String,
    require: true
  },
  agencyPassword: {
    type: String,
    require: true
  },
  agencyPhone: {
    type: String,
  },
  agencyCity: {
    type: String,
  },
  agencyZipCode: {
    type: String,
  },
  agencyWebSite: {
    type: String,
  },
  agencyPackage: {
    type: String,
  },
  termsAndConditios: {
    type: Boolean,
    default: false,
    require: true
  },
  profileComplete: false
});



agencySchema.pre("save", function (next) {
  bcrypt.hash(this.agencyPassword, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.agencyPassword = hash;
    next();
  });
});

agencySchema.statics.authenticate = async (email, password) => {
  const agency = await mongoose.model('Agency').findOne({ agencyEmail: email });
  if (agency) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, agency.agencyPassword, (err, result) => {
        if (err) reject(err);
        resolve(result === true ? agency : null);
      });
    });
  } else {
    return null;
  }
}

module.exports = mongoose.model('Agency', agencySchema);