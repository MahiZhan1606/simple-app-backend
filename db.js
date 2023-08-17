const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://Mahes:mahes12345@cluster0.oohqtlz.mongodb.net/";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection

connection.on("error", () => {
    console.log("Mongo DB connection failed");
})
connection.on("connected", () => {
    console.log("mongo DB connection Successfull !");
})

module.exports = mongoose;

// const mongoose = require("mongoose");
// const mongoURL = "mongodb+srv://Mahes:mahes12345@cluster0.oohqtlz.mongodb.net/";

// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection

// connection.on("error", () => {
//     console.log("Mongo DB connection failed");
// })
// connection.on("connected", () => {
//     console.log("mongo DB connection Successfull !");
// })

// module.exports = mongoose;