import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShowAllRecipesPage from './components/pages/ShowAllRecipesPage';
import DetailRecipePage  from './components/pages/DetailRecipePage';
import AddRecipePage from './components/pages/AddRecipePage';

const Routes = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home Page</Link>
						</li>
						<li>
							<Link to='/about'>About Page</Link>
						</li>
						<li>
							<Link to='/show-all-recipes'>Show All Recipes Page</Link>
						</li>
						<li>
							<Link to='/add-recipe'>Add Recipe Page </Link>
						</li>
						<li>
							<Link to='/detail-recipe'>Recipe Detail Page</Link>
						</li>
					</ul>
				</nav>
				{/* <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/about'> <AboutPage /> </Route>
					<Route path='/show-all-recipes'> <ShowAllRecipesPage /> </Route>
					<Route path='/detail-recipe'> <DetailRecipePage /> </Route>
					<Route path='/add-recipe'> <AddRecipePage /> </Route>
					<Route path='/'> <HomePage /> </Route>
					{/* <Route component={Error} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;