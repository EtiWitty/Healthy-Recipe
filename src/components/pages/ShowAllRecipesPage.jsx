import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Recipe1 from '../staticPages/Recipe1';
import Recipe2 from '../staticPages/Recipe2';
import Recipe3 from '../staticPages/Recipe3';
import Recipe4 from '../staticPages/Recipe4';
import Recipe5 from '../staticPages/Recipe5';


class ShowAllRecipesPage extends React.Component {
	
	render() {
		return (
			<Router>
				<div>
					<h3>Show All Recipes</h3>
					<Link to='/recipe1'>Go to Recipe 1</Link>
					<br></br>
					<Link to='/recipe2'>Go to Recipe 2</Link>
					<br></br>
					<Link to='/recipe3'>Go to Recipe 3</Link>
					<br></br>
					<Link to='/recipe4'>Go to Recipe 4</Link>
					<br></br>
					<Link to='/recipe5'>Go to Recipe 5</Link>

					<Switch>
						<Route exact path='/Recipe1'> <Recipe1 /> </Route>
						<Route exact path='/Recipe2'> <Recipe2 /> </Route>
						<Route exact path='/Recipe3'> <Recipe3 /> </Route>
						<Route exact path='/Recipe4'> <Recipe4 /> </Route>
						<Route exact path='/Recipe5'> <Recipe5 /> </Route>
					</Switch>
				</div>
			</Router>
		)
	}
  }

export default ShowAllRecipesPage;