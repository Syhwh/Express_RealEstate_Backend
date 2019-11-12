const apiController = require('../controllers/apiController');
const { auth } = require('../middlewares/authentication');

const { Router } = require('express');
const router = Router();


// Create a new agency
router.get('/api', apiController.GetZestimate);

module.exports = router;