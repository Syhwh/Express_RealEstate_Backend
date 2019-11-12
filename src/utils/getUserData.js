const Agency = require('../database/models/agencySchema');
module.exports = {
  async getData(userInfo) {
    return {
      userGivenName: userInfo.name,
      userFamilyName: userInfo.lastname,
      userEmail: userInfo.email,
      userPassword: userInfo.password,
      userDescription: userInfo.description,
      userCompany: await Agency.findById(userInfo.companyId),
      userRol: userInfo.rol,
      userContact: {
        officePhone: userInfo.officePhone || '',
        mobilePhone: userInfo.mobilePhone || '',
        skypeId: userInfo.skypeId || ''
      },
      userSocialMedia: {
        facebookURL: userInfo.facebook || '',
        twitterUrl: userInfo.twitter || '',
        instagramURL: userInfo.instagram || '',
      },
      image: userInfo.img || '',
    }
  }
}