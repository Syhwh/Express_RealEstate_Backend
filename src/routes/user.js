
const user = require('../controllers/user');
const { Router } = require('express');
const router = Router();
const { auth } = require('../middlewares/authentication');

//Create an user
router.post('/register', user.register);
//Login an user
router.post('/login', user.login);
//Logout an user
router.post('/logout', auth, user.logout);
//Edit an user
router.put('/user/:id', user.edit);
// delete an user
router.delete('/user/:id', user.delete);
// verify token
router.post('/verify', user.verify);

module.exports = router;
