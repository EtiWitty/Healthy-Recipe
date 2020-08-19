const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const controllers = require('../controllers/recipesController');

dotenv.config()
 
//===============================DB Connection============================================
mongoose.connect(
  process.env.MONGO_URI,
  {useUnifiedTopology: true, useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//===============================Middleware================================================
app.use(cors());
app.use(bodyParser.json());

//===============================GET Request================================================
//TODO: Write an end point which get recipe with id from req.query, and return the json data
app.get('/api/getSingleRecipe/:id', controllers.getSingleRecipeController);
app.get('/api/getAllRecipeNames',   controllers.getAllRecipeNames);
app.post('/api/searchRecipe', controllers.searchRecipeController);

//===============================Test=======================================================
app.get('/api/test', controllers.testController);
// app.get('/hi', function (req, res) {
//   res.send('Hello World!')
// })

//=============================================================================================
const port = process.env.PORT || 3030;

app.listen  (port, () => 
	console.log(`Server is listening on port ${port}...`)
);

module.exports = app;
