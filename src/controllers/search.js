
const jwt = require('jsonwebtoken');
const User = require('../database/models/userSchema');
const Property = require('../database/models/propertySchema');
module.exports = {
  //register a new user
  async search(req, res) {

    try {
      const { search, country, state } = req.query;

      const searchResult = await Property.find(
        { $text: { $search: search || country || state } },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } });  
      res.status(200).json({
        searchResult
      });
    } catch (error) {
      res.status(403).json({ error });
    }
  }
}