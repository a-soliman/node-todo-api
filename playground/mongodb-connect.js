const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';

MongoClient.connect(dbURL, (err, db) => {
	if( err ) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB.');

	db.collection('Todos').insertOne({
		text: 'Do something',
		completed: false
	}, (err, result) => {
		if ( err ) {
			return console.log('Unable to insert todo ', err);
		}
		console.log(JSON.stringify(result.ops, null, 2))
	})

	/*
	db.collection('Todos').insertOne({ 
		text: 'Something to do.',
		completed: false
		}, (err, result) => {
			if( err ) {
				return console.log('Unable to insert todo ', err);
			}

			console.log(JSON.stringify(result.ops, null, 2))
		})
	*.

	/*
	db.collection('Users').insertOne({
		name: 'Ahmed',
		age: 30,
		location: 'San Francisco'
	}, (err, result) => {
		if( err ) {
			return console.log('Unable to insert user ', err);
		}

		console.log(JSON.stringify(result.ops, null, 2));
	})
	*/

	db.close();
});