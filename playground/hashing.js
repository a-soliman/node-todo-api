const { SHA256 } = require('crypto-js');
const jwt 		= require('jsonwebtoken');
const bcrypt 	= require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, sault) => {
// 	bcrypt.hash(password, sault, (err, hash) => {
// 		console.log(hash)
// 	})
// });

let hashedPassowrd = '$2a$10$7wwAUJamIeRbbwUuA4vwkO.quhYaq5i2Wjfz062fv9cZVWhxpFnGy'

bcrypt.compare(password, hashedPassowrd, (err, res) => {
	console.log(res)
})

// let data = {
// 	id: 10
// };

// let token = jwt.sign(data, '123abc')


// let decoded = jwt.verify(token, '123abc')

// console.log(decoded)

// let message = 'user number 3';

// let hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);


// let data = {
// 	id: 4
// };

// let token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// let resultHash = SHA256(JSON.stringify(token.data)).toString()


// if( resultHash === token.hash) {
// 	console.log('Data was not cheanged.')
// } else {
// 	console.log("Data was changed, don't trust it")
// }