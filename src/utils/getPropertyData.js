const User = require('../database/models/userSchema');

module.exports = {
  async getData(propertyInfo, userId) {

    const propertyUser = await User.findById(userId);
    return {
      propertyUser,
      propertyTitle: propertyInfo.propertyTitle,
      propertyDescription: propertyInfo.propertyDescription,
      propertyPrice: propertyInfo.propertyPrice,
      propertyType: propertyInfo.propertyType,
      propertyStatus: propertyInfo.propertyStatus,

      propertyLocation: {
        neighborhood: propertyInfo.neighborhood,
        country: propertyInfo.country,
        state: propertyInfo.state,
        city: propertyInfo.city,
        zipCode: propertyInfo.zipCode,
        address: propertyInfo.address,
        coordenates: propertyInfo.coordenates
      },
      propertyDetails: {
        area: propertyInfo.area,
        rooms: propertyInfo.rooms,
        bedrooms: propertyInfo.bedrooms,
        bathrooms: propertyInfo.bathrooms,
        garages: propertyInfo.garages
      },
      propertyAmmenities: propertyInfo.ammenities,
      propertyGallery: propertyInfo.gallery
    }

  }
}