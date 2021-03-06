const expect 		= require('expect');
const request 		= require('supertest');
const { ObjectID }	= require('mongodb');

const { app }		= require('./../server');
const { Todo }  	= require('./../models/todo');
const { User }  	= require('./../models/user');

const { todos, populateTodos, users, populateUsers } = require('./seed/seed');


beforeEach(populateUsers);
beforeEach(populateTodos);

describe('POST /todos', () => {
	
	it('Should create a new todo', ( done ) => {
		var text = 'test todo text';

		request(app)
			.post('/todos')
			.set('x-auth', users[0].tokens[0].token)
			.send({text})
			.expect(200)
			.expect(( res ) => {
				expect(res.body.doc.text).toBe(text);
			})
			.end(( err, res ) => {
				if( err ){
					return done(err);
				}

				Todo.find({text}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done()
				}).catch(e => done(e));
			});
	});

	it('Should Not create todo with invalid body data', (done) => {

		request(app)
			.post('/todos')
			.set('x-auth', users[0].tokens[0].token)
			.send({})
			.expect(400)
			.end(( err, res) => {
				if( err ) {
					return done(err)
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(2);
					done();
				}).catch(e => done(e));
			})
	})
});

describe('GET /todos', () => {

	it('Should get all todos', (done) => {
		request(app)
			.get('/todos')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(1);
			})

			.end(done)
	})
});

describe('GET /todos/:id', () => {

	it('Should return todo doc', (done) => {
		request(app)
			.get('/todos/' + todos[0]._id)
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.expect(( res ) => {
				expect(res.body.todo.text).toBe(todos[0].text)
			})
			.end(done)
	})

	it('Should return 404 if todo not found', (done) => {

		var someId = new ObjectID().toHexString();

		request(app)
			.get('/todos/' + someId)
			.set('x-auth', users[0].tokens[0].token)
			.expect(404)
			.end(done);
	});

	it('Should NOT return a todo doc created by other user', ( done ) => {
		request(app)
			.get('/todos/' + todos[1]._id.toHexString())
			.set('x-auth', users[0].tokens[0].token)
			.expect(404)
			.end(done)
	});

	it('Should return 404 if WRONG id', (done) => {
		request(app)
			.get('/todos/' + '123')
			.set('x-auth', users[0].tokens[0].token)
			.expect(404)
			.end(done);
	})
});



describe('PATCH /todos/:id', () => {

	it('Should update the Todo', (done) => {
		let id = todos[0]._id.toHexString();
		let newText = 'this is a new test text.'

		request(app)
			.patch('/todos/' + id )
			.set('x-auth', users[0].tokens[0].token)
			.send({text: newText, completed: true})
			.expect(200)
			.expect(( res ) => {
				expect(res.body.todo.text).toBe(newText);
				expect(res.body.todo.completed).toBe(true);
				expect(typeof res.body.todo.completedAt).toBe('number')
			})
			.end(done)
			
	});

	it('Should NOT update Todo created by other user', (done) => {
		let id = todos[0]._id.toHexString();
		let newText = 'this is a new test text.'

		request(app)
			.patch('/todos/' + id )
			.set('x-auth', users[1].tokens[0].token)
			.send({text: newText, completed: true})
			.expect(404)
			.end(done)
			
	});

	it('Should clear completedAt when todo is not completed', ( done ) => {
		let id = todos[1]._id.toHexString();
		let newText = 'this is a new test text.'

		request(app)
			.patch('/todos/' + id )
			.set('x-auth', users[1].tokens[0].token)
			.send({text: newText, completed: false})
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.completed).toBe(false)
			})
			.end(done)
	});
});

describe('DELETE /todos/:id', () => {
	var id = todos[1]._id.toHexString()
	it('Should remove a todo', ( done ) => {

		//var id = todos[0]._id
		request(app)
			.delete('/todos/' + id )
			.set('x-auth', users[1].tokens[0].token)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo._id).toBe(id);
			})
			.end(done)

	});

	it('Should return 404 if todo not found', ( done ) => {
		var invalidId = new ObjectID().toHexString();
		request(app)
			.delete('/todos/' + invalidId )
			.set('x-auth', users[1].tokens[0].token)
			.expect(404)
			.end(done)
	});

	it('Should return 404 if ObjectID is invalid', ( done ) => {
		let invalidId =  todos[0]._id.toHexString() + '123';

		request(app)
			.delete('/todos/' + invalidId)
			.set('x-auth', users[1].tokens[0].token)
			.expect(404)
			.end(done)
	});
});

describe('GET users/me', () => {
	it('Should return user if authenticated', ( done ) => {
		request(app)
			.get('/users/me')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.expect((res) => {
				expect(res.body._id).toBe(users[0]._id.toHexString());
				expect(res.body.email).toBe(users[0].email);
			})
			.end(done);
	});

	it('Should return 401 if not authenticated', ( done ) => {
		request(app)
			.get('/users/me')
			.expect(401)
			.expect((res) => {
				expect(res.body).toEqual({});
			})
			.end(done);
	})
});

describe('POST /users', () => {
	it('Should create a user', ( done ) => {
		let email = 'example@exm.com';
		let password = '123456';

		request(app)
			.post('/users')
			.send({ email, password })
			.expect(200)
			.expect((res) => {
				expect(typeof res.header['x-auth']).toBe('string');
				expect(typeof res.body._id).toBe('string');
				expect(res.body.email).toBe(email);
			})
			.end(done)
	});

	it('Should return validation error if request invalid', ( done ) => {
		let email = 'notEmail';
		let password = '123';

		request(app)
			.post('/users')
			.send({ email, password })
			.expect(400)
			.end(done)
	});

	it('Should not create user if the email is in use', ( done ) => {
		let email = users[0].email;
		let password = users[0].password;

		request(app)
			.post('/users')
			.send({ email, password })
			.expect(400)
			.end(done)
	});
});

describe('POST /users/login', () => {
	it('Should login user and return auth token', ( done ) => {
		request(app)
			.post('/users/login')
			.send({
				email: users[1].email,
				password: users[1].password
			})
			.expect(200)
			.expect((res) => {
				expect(typeof res.headers['x-auth']).toBe('string');
			})
			.end(( err, res) => {
				if ( err ) {
					return done(err);
				}

				User.findById(users[1]._id)
					.then(( user ) => {
						expect(user.tokens[1].access).toBe('auth')
						expect(user.tokens[1].token).toBe(res.headers['x-auth'])
						done()
					})
					.catch((e) => done(e))
			});
	});

	it('Should reject invalid login', ( done ) => {
		request(app)
			.post('/users/login')
			.send({
				email: 'invalid-email@email.com',
				password: 'invalid_password'
			})
			.expect(400)
			.end(done)
	});
});

describe('Delete /users/me/token', () => {
	it('Should remove auth token on logout', ( done ) => {
		request(app)
			.delete('/users/me/token')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.end(( err, res ) => {
				if( err ) {
					return done(err);
				}
				User.findById(users[0]._id).then((user) => {
					expect(user.tokens.length).toBe(0);
					done();
				}).catch(e => done(e))
			})
	})
})
