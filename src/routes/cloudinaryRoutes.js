const cloudinary = require('../controllers/cloudinaryController');
const { Router } = require('express');
const router = Router();
const { auth } = require('../middlewares/authentication');
const upload = require('../utils/multer');
// const multer = require('multer');
//  const upload = multer({ dest: 'uploads' });


var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
// app.post('/upload', multipartMiddleware, function(req, resp) {
//   console.log(req.body, req.files);
//   // don't forget to delete all req.files when done
// });


// // //Create a new gallery
//router.post('/gallery', auth, multipartMiddleware, cloudinary.upload);
// // //Delete a image
// // //router.delete('/gallery/:id', auth, cloudinary.delete)


router.post('/gallery', upload.array('image', 5), auth, cloudinary.upload);

module.exports = router;