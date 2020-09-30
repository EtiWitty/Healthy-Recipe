import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShowAllRecipesPage from './components/pages/ShowAllRecipesPage';
import DetailRecipePage  from './components/pages/DetailRecipePage';
import MindfulChoice from './components/pages/MindfulChoice';
import AdminPage from './components/pages/AdminPage';
import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';

const Routes = () => {
	return (
		<Router>
			<div>
				{/* <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
				<Switch>
					<Route  path='/about' component={AboutPage} />
					<Route  path='/show-all-recipes' component={ShowAllRecipesPage} /> 
					<Route  path='/detail-recipe/:id' component={DetailRecipePage} /> 
					<Route  path='/mindful-choice' component={MindfulChoice} /> 
					<Route  path='/admin-page' component={AdminPage} /> 
					<Route path='/user-signin' component={SignInButton} /> 
					<Route path='/user-signout' component={SignOutButton} /> 
					<Route  path='/' component={HomePage} /> 
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;