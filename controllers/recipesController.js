
const Recipe = require('../models/recipesModel');

// check if the program reach to this page
console.log('hi');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GET ALL RECEPIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const testController = (req, res) => {
	// res.status(200);
	res.send('Sanity check');
	  
}

const test2Controller = (req, res) => {
	let x = req.params.id;
	res.send('salam back'+ "" + x * x);
}
	

module.exports = { testController , test2Controller}
