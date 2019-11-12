const User =require('../database/models/userSchema');

module.exports = {
 async getData(propertyInfo, userId) {
 const  propertyUser= await User.findById(userId);
    return {
      propertyUser,
      ...{
        propertyTitle,
        propertyDescription,
        propertyPrice,
        neighborhood,
        country,
        state,
        city,
        zipCode,
        address,
        propertyType,
        propertyStatus,
        propertyDetails: {
          area,
          rooms,
          bedrooms,
          bathrooms,
          garages
        } = propertyInfo
      } = propertyInfo,




    }

  }
}