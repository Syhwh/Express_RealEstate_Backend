const mongoose = require('mongoose');
const config = require('../configuration/configuration');
console.log(config.mongoose.db)

mongoose.connect(config.mongoose.db, config.mongoose.options)
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
