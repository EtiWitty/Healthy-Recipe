import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShowAllRecipesPage from './components/pages/ShowAllRecipesPage';
import DetailRecipePage  from './components/pages/DetailRecipePage';
import MindfulChoice from './components/pages/MindfulChoice';
import FindRecipePage from './components/pages/FindRecipePage';

const Routes = () => {
	return (
		<Router>
			<div>
				<div className="dropdown">
					<button className="dropbtn">Healthy Recipes</button>
						<div className="dropdown-content">
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/show-all-recipes'>All Recipes</Link>
							<Link to='/mindful-choice'>	Mindful Choice </Link>
							<Link to='/detail-recipe'>Recipe Detail</Link>
							<Link to='/find-recipe'>Find Recipes</Link>
						</div>
				</div>

				{/* <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
				<Switch>
					<Route  path='/about' component={AboutPage} />
					<Route  path='/show-all-recipes' component={ShowAllRecipesPage} /> 
					<Route  path='/detail-recipe/:id' component={DetailRecipePage} /> 
					<Route  path='/mindful-choice' component={MindfulChoice} /> 
					<Route  path='/find-recipe' component={FindRecipePage} /> 
					<Route  path='/' component={HomePage} /> 
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;