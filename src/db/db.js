const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodejs-mongodb-crud");
mongoose.Promise = global.Promise;

module.exports = mongoose;