
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
				return { 
					id: recipe._id, 
					title: recipe.title,
					ingredients: recipe.ingredients,
					calories: recipe.calories,
					imgURL: recipe.imgURL,
					instruction: recipe.instruction,
					tags: recipe.tags
				};
			}));
		}
	});
}

//========================== Get a Single Recipe ==========================================
const getSingleRecipeController = (req, res) => {
	Recipe.findOne({ _id: req.params.id }, (error, result) => {
		// console.log({ error, result }); WHERE TO CHECK THE LOG?? insomnia?

		if (error) {
			res.status(400);
			res.send(`WE FACED AN ERROR: ${error}`);
		} else {
			res.status(200);
			res.send(result);
		}
	})
};

//========================== Get All Searched Rcipes by Title ==========================================

const searchRecipeController = (req, res) => {
	console.log(req.query);
	console.log(req.query.title);
	Recipe.find({title: {$regex: req.query.title, $options: "i"}}, (error, result) => {
		console.log({error, result});
		if (error) {
			res.status(400);
			res.send(`WE CAN'T FIND YOUR SERACHED RECIPE: ${error}`);
		} else {
			res.status(200);
			res.send(result);
		}
	})
}

//========================== Create a Single Recipe ==========================================

const addRecipeController = (req, res) => {
	const newRecipe = new recipesModel({
		title: req.body.title,
		ingredients: req.body.ingredients,
		calories: req.body.calories,
		imgURL: req.body.imgURL,
		instruction: req.body.instruction,
		tags: req.body.tags
	});

	newRecipe.save((error, result) => {
		console.log({ error, result });
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
	addRecipeController,
	searchRecipeController
}
