
module.exports = {
  getData(agencyInfo) {
    return {
      agencyName: agencyInfo.agencyName || '',
      agencyDescription: agencyInfo.agencyDescription || '',
      agencyAddress1: agencyInfo.agencyAddress1 || '',
      agencyAddress2: agencyInfo.agencyAddress2 || '',
      agencyEmail: agencyInfo.userEmail,
      agencyPassword: agencyInfo.userPassword,
      agencyPhone: agencyInfo.agencyPhone || '',
      agencyCity: agencyInfo.agencyCity || '',
      agencyZipCode: agencyInfo.agencyZipCode || '',
      agencyWebSite: agencyInfo.agencyWebSite || '',
      agencyPackage: agencyInfo.agencyPackage || '',
      termsAndConditions: agencyInfo.termsAndConditions || '',
    }
  }
}