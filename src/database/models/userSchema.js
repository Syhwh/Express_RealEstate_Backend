const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  userGivenName: {
    type: String,
    // required: [true, "is required"]
  },
  userFamilyName: {
    type: String,
    // required: [true, "is required"]
  },
  userEmail: {
    type: String,
    required: [true, "is required"]
  },
  userPassword: {
    type: String,
    required: [true, "is required"]
  },
  userDescription: {
    type: String,
    //require: true,
  },
  userAgency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    require: true
  },
  typeAccount: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  userContact: {
    officePhone: String,
    mobilePhone: String,
    skypeId: String
  },
  userSocialMedia: {
    facebookURL: String,
    twitterUrl: String,
    instagramURL: String
  },
  termsAndConditios: {
    type: Boolean,
    default: false,
    require: true
  },
  image: String,
  profileComplete: false
});

// Encrypt the password
UserSchema.pre("save", function (next) {
  bcrypt.hash(this.userPassword, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.userPassword = hash;
    next();
  });
});

// verify that the user exists and the password is correct
UserSchema.statics.authenticate = async (email, password) => {
  const user = await mongoose.model('User').findOne({ userEmail: email });
  if (user) {
    console.log('user in login')
    console.log(user)
    console.log(user.userPassword)

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.userPassword, (err, result) => {
        if (err) reject(err);
        resolve(result === true ? user : null);
      });
    });
  } else {
    return null;
  }
}



module.exports = mongoose.model('User', UserSchema)
