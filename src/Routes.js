import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShowAllRecipesPage from './components/pages/ShowAllRecipesPage';
import DetailRecipePage  from './components/pages/DetailRecipePage';
import MindfulChoice from './components/pages/MindfulChoice';
import AdminPage from './components/pages/AdminPage';
import UserInfo from './components/pages/UserInfo';
import Header from './components/Header';
import Footer from './components/Footer';


const Routes = () => {
	return (
		<Router>
			<div>
				<Header />
				{/* <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/about' component={AboutPage}/>
					<Route  path='/show-all-recipes' component={ShowAllRecipesPage} /> 
					<Route  path='/detail-recipe/:id' component={DetailRecipePage} /> 
					<Route  path='/mindful-choice' component={MindfulChoice} /> 
					<Route  path='/admin-page' component={AdminPage} /> 
					<Route  path='/user-info' component={UserInfo} /> 
					<Route  path='/' component={HomePage} /> 
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default Routes;