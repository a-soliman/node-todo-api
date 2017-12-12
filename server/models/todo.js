const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlenght: 3,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	_creater: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = { Todo };