const expect 		= require('expect');
const request 		= require('supertest');
const { ObjectID }	= require('mongodb')

const { app }		= require('./../server');
const { Todo }  	= require('./../models/todo');
const { User }  	= require('./../models/user');

const todos = [{
	_id: new ObjectID(),
	text: 'First test todo'
}, {
	_id: new ObjectID(),
	text: 'Second test todo'
}];

const users = [{
	_id: new ObjectID(),
	email: 'First test email'
}, {
	_id: new ObjectID(),
	email: 'Second test email'
}];


describe('POST /todos', () => {
	beforeEach((done) => {
		Todo.remove({}).then(() => {
			Todo.insertMany(todos)
		}).then(() => done())
			
	});

	it('Should create a new todo', ( done ) => {
		var text = 'test todo text';

		request(app)
			.post('/todos')
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
	beforeEach((done) => {
		Todo.remove({}).then(() => {
			Todo.insertMany(todos)
		}).then(() => done())
			
	});


	it('Should get all todos', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})

			.end(done)
	})
});

describe('GET /todos/:id', () => {

	it('Should return todo doc', (done) => {
		request(app)
			.get('/todos/' + todos[0]._id)
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
			.expect(404)
			.end(done());
	})

	it('Should return 404 if WRONG id', (done) => {
		request(app)
			.get('todos/' + '123')
			.expect(404)
			.end(done());
	})
})

// beforeEach((done) => {
// 	User.remove({}).then(() => { 
// 		return User.insertMany(users); 
// 	}).then(() => done());
// });

// describe('POST /users', () => {
// 	it('Should create a new user', (done) => {
// 		let email = 'test@user.com'

// 		request(app)
// 		.post('/users')
// 		.send({ email })
// 		.expect(200)
// 		.expect(( res ) => {
// 			expect(res.body.doc.email).toBe(email);
// 		})
// 		.end(( err, res ) => {
// 			if ( err ) {
// 				return done(err);
// 			}

// 			User.find().then((users) => {
// 				expect(users.length).toBe(1);
// 				expect(users[0].email).toBe(email);
// 				done();
// 			}).catch(e => done(e));
// 		});
// 	});
// 	it('Should not create a new user with bad data', (done) => {

// 		request(app)
// 			.post('/users')
// 			.send({})
// 			.expect(400)
// 			.end(( err, res) => {
// 				if ( err ) { 
// 					return done(err)
// 				}

// 				User.find().then((users) => {
// 					expect(users.length).toBe(0);
// 					done()
// 				}).catch(e => done(e));
// 			})
// 	})
// });