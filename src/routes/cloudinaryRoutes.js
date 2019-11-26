const cloudinary = require('../controllers/cloudinaryController');
const { Router } = require('express');
const router = Router();
const { auth } = require('../middlewares/authentication');
const upload = require('../utils/multer');


router.post('/gallery', upload.array('image', 5), auth, cloudinary.upload);

module.exports = router;