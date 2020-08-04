
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
	_id: mongoose.Schema.ObjectId,
	name: {
		type: String,
		// any space in the beginning or end will be trimmed
		trim: true, 
		required: true,
		maxLength: 32
	},
	ingredients: {
		type: Array,
		required: true,
		detail: [{ 
			name: {
				type: String,
				trim: true, 
				required: true,
			},
			quantity: {
			  type: Number, 
			  trim: true, 
			  required: true,
			}
		}]
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
	instructions: {
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