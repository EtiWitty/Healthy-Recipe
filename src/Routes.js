import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShowAllRecipesPage from './components/pages/ShowAllRecipesPage';
import DetailRecipePage  from './components/pages/DetailRecipePage';
import AddRecipePage from './components/pages/AddRecipePage';
import FindRecipePage from './components/pages/FindRecipePage';

const Routes = () => {
	return (
		<Router>
			<div>
				<div className="dropdown">
					<button className="dropbtn">Healthy Recipes</button>
						<div className="dropdown-content">
							<Link to='/'>Home Page</Link>
							<Link to='/about'>About Page</Link>
							<Link to='/show-all-recipes'>Show All Recipes Page</Link>
							<Link to='/add-recipe'>Add Recipe Page</Link>
							<Link to='/detail-recipe'>Recipe Detail Page</Link>
							<Link to='/find-recipe'>Find Recipes Page</Link>
						</div>
				</div>

				{/* <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
				<Switch>
					<Route  path='/about' component={AboutPage} />
					<Route  path='/show-all-recipes' component={ShowAllRecipesPage} /> 
					<Route  path='/detail-recipe/:id' component={DetailRecipePage} /> 
					<Route  path='/add-recipe' component={AddRecipePage} /> 
					<Route  path='/find-recipe' component={FindRecipePage} /> 
					<Route  path='/' component={HomePage} /> 
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;