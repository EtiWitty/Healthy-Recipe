
const Recipe = require('../models/recipesModel');

// check if the program reach to this page
console.log('hi');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GET ALL RECEPIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const testController = (req, res) => {
	// res.status(200);
	res.send('Sanity check');
}

const getAllRecipeNames = (req, res) => {
	Recipe.find(function(error, result) {
		console.log({ error, result });
		if (error) {
			res.status(400);
			res.send(`WE FACED AN ERROR: ${error}`);
		} else {
			res.status(200);
			res.send(result.map((recipe) => {
				return { id: recipe._id, name: recipe.name };
			}));
		}
	});
}

const getSingleRecipeController = (req, res) => {
	Recipe.findOne({ _id: req.params.id }, function(error, result) {
		console.log({ error, result });
		if (error) {
			res.status(400);
			res.send(`WE FACED AN ERROR: ${error}`);
		} else {
			res.status(200);
			res.send(result);
		}
	})
};

const test2Controller = (req, res) => {
	let x = req.params.id;
	res.send('salam back'+ "" + x * x);
};

module.exports = {
	getSingleRecipeController,
	getAllRecipeNames,
	testController,
	test2Controller,
}
