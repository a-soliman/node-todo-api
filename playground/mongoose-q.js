const { ObjectID }	= require('mongodb')
const { mongoose } 	= require('./../server/db/mongoose');
const { Todo }		= require('./../server/models/todo');
const { User } 		= require('./../server/models/user');

let id = '5a207c66858a9bd81fc8a1bb11';
let userId = '5a207c65858a9bd81fc8a1b9';

if( !ObjectID.isValid(userId)) {
	console.log('Invalid User Id');
}
else {
	User.findById(userId)
		.then((user) => {
			if( !user ) {
				return console.log('User not found');
			}

			console.log('User: ', user);
		})
		.catch(( err ) => {
			console.log('something went wrong');
		});
}

// if( !ObjectID.isValid(id)) {
// 	console.log('ID not Valid...')
// };

// Todo.find({ _id: id }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({ _id: id }).then((todo) => {
// 	console.log('Todo', todo)
// });

// Todo.findById(id)
// 	.then((todo) => {
// 		if( !todo ) {
// 			return console.log('Didnt find the todo')
// 		}
// 		console.log('Todo', todo);
// 	})
// 	.catch( ( err ) => {
// 		console.log('Invalid Id.')
// 	})