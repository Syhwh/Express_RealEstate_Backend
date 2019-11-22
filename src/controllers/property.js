const Property = require('../database/models/propertySchema');
const { getData } = require('../utils/getPropertyData');

module.exports = {
  async create(req, res) {
    try {
      const propertyInfo = await getData(req.body, req.userId.id);
      console.log('propertyInfo')
      console.log(propertyInfo)
      const property = await Property.create(propertyInfo);
      console.log('property created')
      console.log(property)
      res.status(200).json({ message: 'New Property Created', property });
    } catch (error) {
      res.status(403).json({ error });
    }
  },
  async edit(req, res) {
    const { id } = req.params;
    const propertyUpdateInfo = {
      //property info
    };
    try {
      await Property.updateOne(({ _id: id }, propertyUpdateInfo));
      res.status(200).json({ message: 'Property edited succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Property.deleteOne(({ _id: id }));
      res.status(200).json({ message: 'Property deleted succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  },
  async details(req, res) {
    const { id } = req.params;

    try {
      const property = await Property.findById(id);
      console.log(property)
      res.status(200).json({ property })
    } catch (error) {
      res.status(401).json(error.message)
    }
  },
  async list(req, res) {
    console.log('in list back')
    try {
      const properties = await Property.find();
      res.status(200).json({ properties })
    } catch (error) {
      res.status(401).json(error.message)
    }
  }

}
