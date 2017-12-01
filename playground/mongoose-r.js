const { ObjectID } = require('mongodb');
const {  mongoose } = require('./../server/db/mongoose');
const { Todo } 		= require('./../server/models/todo');

// Todo.remove => REMOVES ALL
Todo.remove({}).then((result) => {
	console.log(result);
});