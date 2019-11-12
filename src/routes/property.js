const property = require('../controllers/property');
const { Router } = require('express');
const router = Router();
const { auth } = require('../middlewares/authentication');

//Create a new property
router.post('/property', auth, property.create);
//Edit a property
router.put('/property:id', auth, property.edit);
//Delete a property
router.delete('/property/:id', auth, property.delete)
//Show a property details
router.get('/property/:id', property.details);
//Show all properties
router.get('/property', property.list);

module.exports = router;