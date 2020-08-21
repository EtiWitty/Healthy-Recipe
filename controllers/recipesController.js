
const Recipe = require('../models/recipesModel');
const { Schema, Mongoose } = require('mongoose');
const recipesModel = require('../models/recipesModel');

// check if the program reach to this page
console.log('hi');


//========================== Get All Recipes ==========================================
const getAllRecipeNames = (req, res) => {
	Recipe.find((error, result) => {
		// console.log({ error, result });
		if (error) {
			res.status(400);
			res.send(`WE FACED AN ERROR: ${error}`);
		} else {
			res.status(200);
			res.send(result.map((recipe) => {
				//for now
				return { id: recipe._id, name: recipe.name };
			}));
		}
	});
}

//========================== Get a Single Recipe ==========================================
const getSingleRecipeController = (req, res) => {
	Recipe.findOne({ _id: req.params.id }, (error, result) => {
		// console.log({ error, result });
		if (error) {
			res.status(400);
			res.send(`WE FACED AN ERROR: ${error}`);
		} else {
			res.status(200);
			res.send(result);
		}
	})
};
//========================== Create a Single Recipe ==========================================

const searchRecipeController = (req, res) => {
	const newRecipe = new recipesModel({
		name: req.body.name,
		ingredients: req.body.ingredients,
		calories: req.body.calories,
		imgURL: req.body.imgURL,
		instruction: req.body.instruction,
		tags: req.body.tags
	});

	newRecipe.save((error, result) => {
		// console.log('hi');
		if (error) {
			res.status(500);
			res.send(`WE CAN'T ADD A NEW RECIPE ${error}`);
		} else {
			res.status(200);
			res.send(result);
		}
	})
}
//========================== Test1 ==========================================
const testController = (req, res) => {
	// res.status(200);
	res.send('Sanity check');
}

//========================== Test2 ==========================================
const test2Controller = (req, res) => {
	let x = req.params.id;
	res.send('salam back'+ "" + x * x);
};

module.exports = {
	getSingleRecipeController,
	getAllRecipeNames,
	testController,
	test2Controller,
	searchRecipeController
}
