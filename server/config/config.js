var env = process.env.NODE_ENV || 'development';
var dbURL;

if(env === 'development') {

	 dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';
} else if (env === 'test') {
	
	 dbURL = 'mongodb://ahmed_soliman:abc123@ds125906.mlab.com:25906/node-todo-api-test'
};

module.exports = dbURL;