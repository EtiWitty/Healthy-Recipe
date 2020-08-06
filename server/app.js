const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const controllers = require('../controllers/recipesController');

dotenv.config()
 
//===============================DB Connection============================================
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//===============================GET Request================================================
//TODO: Write an end point which get recipe with id from req.query, and return the json data

app.get('/test',controllers.testController);
app.get('/test/:id',controllers.test2Controller);



//=============================================================================================
const PORT = process.env.PORT || 3030;

app.listen  (PORT, () => {
	console.log('Server is listening on port:', PORT)
});



module.exports = app;
