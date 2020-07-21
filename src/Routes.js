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
			<div className="router-links">
				<nav className="nav justify-content-center">
					<ul>
						<li className="nav-item">
							<Link to='/'>Home Page</Link>
						</li>
						<li className="nav-item">
							<Link to='/about'>About Page</Link>
						</li>
						<li className="nav-item">
							<Link to='/show-all-recipes'>Show All Recipes Page</Link>
						</li>
						<li className="nav-item">
							<Link to='/add-recipe'>Add Recipe Page </Link>
						</li>
						<li className="nav-item">
							<Link to='/detail-recipe'>Recipe Detail Page</Link>
						</li>
						<li className="nav-item">
							<Link to='/find-recipe'>Find Recipes Page</Link>
						</li>
					</ul>
				</nav>
				{/* <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
				<Switch>
					<Route  path='/about' component={AboutPage} />
					<Route  path='/show-all-recipes' component={ShowAllRecipesPage} /> 
					<Route  path='/detail-recipe/:id' component={DetailRecipePage} /> 
					<Route  path='/add-recipe' component={AddRecipePage} /> 
					<Route  path='/find-recipe' component={FindRecipePage} /> 
					<Route  path='/' component={HomePage} /> 
					{/* <Route component={Error} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;