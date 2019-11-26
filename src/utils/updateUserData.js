const Agency = require('../database/models/agencySchema');
module.exports = {
  async updateData(userInfo) {
    return {
      userEmail: userInfo.userEmail,
      userGivenName: userInfo.userGivenName,
      userFamilyName: userInfo.userFamilyName,
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
      image: userInfo.image || '',
      profileComplete: true
    }
  }
}