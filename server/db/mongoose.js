const mongoose = require('mongoose');
// const dbURL		= require('./../config/config');

mongoose.Promise = global.Promise


var dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';
mongoose.connect(dbURL);


module.exports = { mongoose };