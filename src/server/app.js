
if (process.env.NODE_ENV === 'testing') {
  require('custom-env').env('testing');
} else {
  require('dotenv').config();
}

const express = require('express');
const router = require('../routes');
const cors = require('cors');
const multer = require('multer');

// Create application
const app = express();

app.use(cors({
  origin: '*'
}));



if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
 // app.use(morgan('dev'));
}


//Database
require('../database/database');

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
router(app);

// Handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

module.exports = app;