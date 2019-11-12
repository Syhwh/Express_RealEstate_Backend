const agency = require('../controllers/agency');
const { auth } = require('../middlewares/authentication');

const { Router } = require('express');
const router = Router();

// Create a new agency
router.post('/agency/register', agency.register);
// Login as agency
router.post('/agency/login', agency.login);
//edit an agency
router.put('/agency/:id', auth, agency.edit);
// delete an agency
router.delete('/agency/:id', auth, agency.delete);
//Get all the agency info
//router.get('/agency/:id', auth, agency.get);

module.exports = router;