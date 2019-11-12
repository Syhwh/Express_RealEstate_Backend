const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const agencySchema = mongoose.Schema({
  agencyName: {
    type: String,
    require: true
  },
  agencyDescription: {
    type: String,
    require: true
  },
  agencyAddress1: {
    type: String,
    require: true
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
    require: true
  },
  agencyCity: {
    type: String,
    require: true
  },
  agencyZipCode: {
    type: String,
    require: true
  },
  agencyWebSite: {
    type: String,
    require: true
  },
  agencyPackage: {
    type: String,
    require: true
  },
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
  const agency = await mongoose.model('Agency').findOne({ email: email });
  if (agency) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, agency.password, (err, result) => {
        if (err) reject(err);
        resolve(result === true ? agency : null);
      });
    });
  } else {
    return null;
  }
}

module.exports = mongoose.model('Agency', agencySchema);