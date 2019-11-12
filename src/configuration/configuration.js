
const config = {
    port: process.env.PORT || 3000,
    mongoose: {
        db: process.env.MONGO_URI,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        },
    },
    zwsid: process.env.ZWSID
}
module.exports = config;