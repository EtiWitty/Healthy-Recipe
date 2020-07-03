import React from 'react';
import FindRecipe from './FindRecipe';
import AddRecipe from './AddRecipe';

class MainPage extends React.Component {
	render () {
		return (
			<div> 
				<h1>Hi</h1>
				<FindRecipe />
				<AddRecipe />
			</div>
		);
	}
}

export default MainPage;