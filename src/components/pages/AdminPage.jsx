import React from 'react';
import Header from '../Header';

class AdminPage extends React.Component {
	
	render() {
	  	return(
			<div>
				<Header />
				<div className="find-recipe-page internal-page">
					<h2>Welcome to the Admin Page</h2>
				</div>
			</div>
		)
	}
}

export default AdminPage;