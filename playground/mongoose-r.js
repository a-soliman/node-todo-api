const { ObjectID } = require('mongodb');
const {  mongoose } = require('./../server/db/mongoose');
const { Todo } 		= require('./../server/models/todo');

// Todo.remove => REMOVES ALL

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({text: "First test todo"}).then((doc) => {
// 	console.log(doc)
// });

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5a21854bab1ad97c6762b467').then((doc) => {
	console.log(doc)
})