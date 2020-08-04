//TODO: Write an end point which get recipe with id from req.query, and return the json data

import axios from 'axios';

const Recipes = require('../models/recipesModel');

// Make a request for a user with a given ID
axios.get('/detail-recipe/:id')
	.then((response) => {
		//handle success
		console.log(response);
	})
	.catch((error) => {
		//handle error
		console.log(error)
	})
	.finally(() => {
	// always executed 

	});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get('/test1', (req, res) => {
  res.status(200).send('hiiii');
});

app.get('/testtime', (req, res) => {
  db.getTime((err, data) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});	
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GET ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get('/detail-recipe/:id', (req, res) => {
	db.getListing(req.params.id, (err, data) => {
	  if (err) {
		res.status(500);
		res.send(err);
	  } else {
		res.status(200);
		res.send(data);
	  }
	});
  });