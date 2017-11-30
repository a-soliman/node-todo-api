const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';


MongoClient.connect(dbURL, ( err, db ) => {
	if( err ) {
		return console.log('Unable to connect to DB ', err);
	}

	// DELETE MANY
	// db.collection('Todos').deleteMany({ text: 'Do something'}).then((result) => {
	// 	console.log(result);
	// });

	// // DELETE ONE
	// db.collection('Todos').deleteOne({text: undefined }).then((reult) => {
	// 	console.log(result)
	// }, (err) => {
	// 	console.log('unable to remove todo')
	// });

	// FIND ONE AND DELETE
	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result)
	}, ( err ) => {
		console.log('Unable to remove todo ', err);
	});
});