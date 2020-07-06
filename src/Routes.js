import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Users from './components/Users';

const Routes = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>MainPage</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/users'>Users</Link>
						</li>
					</ul>
				</nav>
				{/* <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/about'> <About /> </Route>
					<Route path='/users'> <Users /> </Route>
					<Route path='/'> <MainPage /> </Route>
					{/* <Route component={Error} /> */}
				</Switch>
			</div>
		</Router>
	);
}

// function MainPage() {
// 	return <h2>MainPage</h2>
// }

// function About() {
// 	return <h2>About</h2>
// }

// function Users() {
// 	return <h2>users</h2>
// }

export default Routes;