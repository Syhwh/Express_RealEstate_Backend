const jwt = require('jsonwebtoken');
const Agency = require('../database/models/agencySchema');
const { getData } = require('../utils/getAgencyData');

module.exports = {
  async register(req, res) {
    try {
      const agencyData = getData(req.body);      
      const agency = await Agency.create(agencyData);
      const token = jwt.sign(
        { id: agency._id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 }
      );
      res.status(200).json({ message: 'Agency Created', token, agency });
    } catch (error) {
      res.status(403).json({ error });
    }
  },
  async login(req, res) {
    try {
      const agency = await Agency.authenticate(req.body.userEmail, req.body.userPassword);
     
      if (!agency) {
        res.status(401).res('Invalid user or password');
        return;
      }
      const token = jwt.sign(
        { id: agency._id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 });

      res.status(200).json({ message: 'Agency logged', token });
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async logout(req, res) {
    try {
      req.userId = null;
      res.status(200).json({ message: 'Agency logged out' });
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async edit(req, res) {
    const { id } = req.params;
    const agencyUpdateInfo = {
      userName: req.body.title,
    };
    try {
      await Agency.updateOne(({ _id: id }, agencyUpdateInfo));
      res.status(200).json({ message: 'Agency edited succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Agency.deleteOne(({ _id: id }));
      res.status(200).json({ message: 'Agency deleted succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  }
}
