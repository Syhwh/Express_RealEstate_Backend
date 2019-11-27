const Agency = require('../database/models/agencySchema');
module.exports = {
  async getData(userInfo) {
    return {
      userGivenName: userInfo.userGivenName,
      userFamilyName: userInfo.userFamilyName,
      userEmail: userInfo.userEmail,
      userPassword: userInfo.userPassword,
      userDescription: userInfo.userDescription,
      userAgency: userInfo.userAgency || await Agency.findById('5dde9d5c1c9d4400004f4afe'),
      typeAccount: userInfo.typeAccount,
      userContact: {
        officePhone: userInfo.officePhone || '',
        mobilePhone: userInfo.mobilePhone || '',
        skypeId: userInfo.skypeId || ''
      },
      userSocialMedia: {
        facebookURL: userInfo.facebookURL || '',
        twitterUrl: userInfo.twitterUrl || '',
        instagramURL: userInfo.instagramURL || '',
      },
      termsAndConditions: userInfo.termsAndConditions,
      image: userInfo.image || '',
      profileComplete: false
    }
  }
}