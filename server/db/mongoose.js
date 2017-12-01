const mongoose = require('mongoose');
const dbURL		= require('./../config/config');

mongoose.Promise = global.Promise


mongoose.connect(dbURL);


module.exports = { mongoose };