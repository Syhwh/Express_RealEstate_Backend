
const search = require('../controllers/search');
const { Router } = require('express');
const router = Router();

//Search
router.get('/search', search.search);

module.exports = router;