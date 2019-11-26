const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })


const fileFilter = (req, file, cb) => {


    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
        console.log('entra aqui')
    } else {
        //reject file
        cb({ message: 'Unsupported file format' }, false)
    }
}

const upload = multer({
    dest: '../uploads/',
    limits: { fileSize: 1024 * 1024 },
    fileFilter: fileFilter
})

//const upload = multer({ dest: '../uploads/' });


module.exports = upload;