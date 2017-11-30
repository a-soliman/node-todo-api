const { MongoClient, ObjectId } = require('mongodb')

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';

MongoClient.connect(dbURL, ( err, db ) => {
	if( err ) {
		return console.log('Unable to connect to DB');
	}
	console.log('Connected to MongoDB Server...');

	// db.collection('Todos').findOneAndUpdate({ 
	// 	text: 'Buy bread'
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result)
	// })

	db.collection('Users').findOneAndUpdate({
		name: 'DDDDD'
	}, {
		$set: {
			name: 'DDDDD',
			weight: 'A looot'
		},
		$inc: {
			age: 5
		}
	}, {
		returnOriginal: false
	})
	.then((result) => {
		console.log(result);
	}, (err) => {
		console.log('Unable to update document...')
	})

	db.close();
})