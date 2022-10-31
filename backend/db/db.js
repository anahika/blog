const mongoose = require('mongoose');
const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        //console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = ConnectDB;