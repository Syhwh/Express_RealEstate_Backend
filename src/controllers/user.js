
const jwt = require('jsonwebtoken');
const User = require('../database/models/userSchema');
const { getData } = require('../utils/getUserData');
module.exports = {
  async register(req, res) {
    const userData = await getData(req.body)
    console.log(userData)
    try {
      const user = await User.create(userData);
      console.log("user created")
      console.log(user)
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 }
      );
      res.status(200).json({ message: 'User Created', token });
    } catch (error) {
      res.status(403).json({ error });
    }
  },
  async login(req, res) {
    try {
      console.log(req.body)
      const user = await User.authenticate(req.body.email, req.body.password);
      if (!user) {
        res.status(401).res('Invalid user or password');
        return;
      }
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 1000 * 60 * 60 * 24 * 365 }
      );

      res.status(200).json({ message: 'User logged', token });
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async logout(req, res) {
    try {
      req.userId = null;
      res.status(200).json({ message: 'User logged out' });
    } catch (error) {
      res.status(403).send({ error });
    }
  },
  async edit(req, res) {
    const { id } = req.params;
    const userUpdateInfo = {
      userName: req.body.title,
    };
    try {
      await User.updateOne(({ _id: id }, userUpdateInfo));
      res.status(200).json({ message: 'User edited succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await User.deleteOne(({ _id: id }));
      res.status(200).json({ message: 'User deleted succesfully' });
    } catch (error) {
      res.status(401).json(error.message)
    }
  }
}