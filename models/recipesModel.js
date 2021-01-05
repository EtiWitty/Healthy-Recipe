
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		// any space in the beginning or end will be trimmed
		trim: true, 
		required: true,
		maxLength: 32
	},

	// ingredients: [{ 
	// 	name: {
	// 		type: String,
	// 		trim: true, 
	// 		required: true,
	// 	},
	// 	quantity: {
	// 		type: Number, 
	// 		trim: true, 
	// 		required: true,
	// 	}
	// }],

	ingredients: [{ 
		type: String,
		trim: true, 
		required: true,
	}],

	quantity: {
		type: Number, 
		trim: true, 
		required: true,
	},
	
	calories: {
		type: Number,
		required: true,
	},
	imgURL: {
		type: String,
		required: true,
		unique: true
	},
	instruction: {
		type: String,
		trim: true, 
		required: true,
	},
	tags: {
		type: Array,
		required: true,
	}	
});

module.exports = mongoose.model('Recipe', recipeSchema);