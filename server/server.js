const express 	 	= require('express');
const bodyParser 	= require('body-parser');
const { ObjectID } 	= require('mongodb')

const {mongoose} 	= require('./db/mongoose');
const {Todo} 	 	= require('./models/todo');
const {User} 	 	= require('./models/user');

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// TODO GET
app.get('/todos', ( req, res ) => {
	Todo.find().then((todos) => {
		res.send({ todos});
	}, ( err ) => {
		res.status(400).send('Unable to fitch todos');
	})
});

// Get one Todo
app.get('/todos/:id', ( req, res ) => {
	let id = req.params['id'];

	if( !ObjectID.isValid(id) ) {
		res.status(404).send('Invalid Id')
	} 
	else {
		Todo.findById(id)
			.then( 
				( todo ) => {
					if( !todo ) {
						return res.status(404).send('Unable to find a Todo with the provided ID.');
					}
					res.send({ todo });
			}, 
				( err ) => {
					res.status(404).send('Unable to find a Todo with the provided ID.');
				}
			)
			.catch(
				( err ) => {
					res.send('an error have occured.')
				}
			)
	}
});

// TODO POST
app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send({ status: 'Saved', doc: doc });
	}, (err) => {
		res.status(400).send(err)
	});
});

// USER POST
app.post('/users', ( req, res ) => {
	let user = new User({
		email: req.body.email
	});

	user.save().then(( doc ) => {
		res.status(200).send({ doc: doc })
	}, ( err ) => {
		res.status(400).send(err)
	})
});

app.listen(port, () => {
	console.log(`Server is on at ${port}.`);
});

module.exports = { app };