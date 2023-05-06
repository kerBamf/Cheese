require('dotenv').config()
const mongoose = require('mongoose')
const { MONGODB_URL } = process.env;


mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on("open", () => console.log("We have connected to the great cheese database"))
    .on("close", () => console.log("We have just disconnected from the great cheese database"))
    .on("error", (error => console.log(error)))

module.exports = mongoose;