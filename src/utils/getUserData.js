const Agency = require('../database/models/agencySchema');
module.exports = {
  async getData(userInfo) {
    return {
      userGivenName: userInfo.userGivenName,
      userFamilyName: userInfo.userFamilyName,
      userEmail: userInfo.userEmail,
      userPassword: userInfo.userPassword,
      userDescription: userInfo.userDescription,
      userAgency: userInfo.userAgency || await Agency.findById('5dc6f4b4b33c491d7c0c1af9'),
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
    }
  }
}