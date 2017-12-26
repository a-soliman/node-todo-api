const config 			= require('./config/config.js');

const _					= require('lodash')
const express 	 		= require('express');
const bodyParser 		= require('body-parser');
const { ObjectID } 		= require('mongodb')

const {mongoose} 		= require('./db/mongoose');
const {Todo} 	 		= require('./models/todo');
const {User} 	 		= require('./models/user');
const { authenticate }	= require('./middleware/authenticate')

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	//res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

// TODO GET
app.get('/todos', authenticate, ( req, res ) => {
	Todo.find({
		_creater: req.user._id
	}).then((todos) => {
		res.send({ todos});
	}, ( err ) => {
		res.status(400).send('Unable to fitch todos');
	})
});

// Get one Todo
app.get('/todos/:id',authenticate, ( req, res ) => {
	let id = req.params['id'];

	if( !ObjectID.isValid(id) ) {
		res.status(404).send('Invalid Id')
	} 
	else {
		Todo.findOne({
			_id: id,
			_creater: req.user._id
		})
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
app.post('/todos', authenticate, (req, res) => {
	let todo = new Todo({
		text: req.body.text,
		_creater: req.user._id
	});

	todo.save().then((doc) => {
		res.send({ status: 'Saved', doc: doc });
	}, (err) => {
		res.status(400).send(err)
	});
});

// TODO DELETE
app.delete('/todos/:id',authenticate, ( req, res ) => {
	//get the id
	let id = req.params['id'];

	if( !ObjectID.isValid(id) ) {
		return res.status(404).send('Invalid Id');
	}

	Todo.findOneAndRemove({
		_id: id,
		_creater: req.user._id
	})
		.then(
			( todo ) => {
				if( !todo ) {
					return res.status(404).send('Unable to find Todo with the provided Id.')
				}
				res.status(200).send({ todo });
			}, 
			( err ) => {
				res.status(404).send('Unable to find Todo with the provided Id.')
			})
		.catch(
			( err ) => {
				res.status(404).send('an error has occured.')
			})
})

// TODO UPDATE
app.patch('/todos/:id', authenticate , ( req, res ) => {
	let id = req.params['id'];
	
	//strickting what the user can update
	let body = _.pick(req.body, ['text', 'completed']);

	if( !ObjectID.isValid(id) ) {
		return res.status(404).send()
	}

	//checking if .completed is a boolean and if it's true
	if(_.isBoolean(body.completed) && body.completed) {
		
		const now = new Date().getTime();
		body.completedAt = Math.round(now / 1000);

	}
	else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findOneAndUpdate({
		_id: id,
		_creater: req.user._id

	}, { $set: body }, { new: true })
		.then(( todo ) => {
			if( !todo ) {
				return res.status(404).send();
			}

			res.send({ todo })
		})
		.catch(( err ) => {
			res.status(400).send();
		})
})

// USER POST
app.post('/users', ( req, res ) => {
	console.log('recieving request === ')
	let body = _.pick(req.body, ['email', 'password']);
	
	let user = new User(body)

	user.save().then(() => {
		return user.generateAuthToken()
	}).then((token) => {
		res.header('x-auth', token).send(user)
	}).catch((e) => {
		res.status(400).send(e)
	})
});


app.get('/users/me', authenticate, ( req, res ) => {
	res.send(req.user);
});

// POST users/login
app.post('/users/login', ( req, res ) => {
	let body = _.pick(req.body, ['email', 'password'])

	User.findByCredentials(body.email, body.password)
		.then((user) => {
			//found user set it's token
			return user.generateAuthToken()
				.then((token) => {
					let modifiedUser = {
						id: user.id,
						email: user.email,
						'x-auth': token
					}
					res.set({
						'Content-Type': 'application/json',
						'exxxx' : 'GG-Test-GG'
					}).send(modifiedUser);
				});
			
		})
		.catch((e) => {
			//didn't find user || incorrect password
			res.status(400).send(e);
		})
});

// Delete Token
app.delete('/users/me/token', authenticate, ( req, res ) => {
	req.user.removeToken(req.token)
		.then(
			() => {
				res.status(200).send();
			},
			() => {
				res.status(400).send();
			});
});

app.listen(port, () => {
	console.log(`Server is on at ${port}.`);
});

module.exports = { app };