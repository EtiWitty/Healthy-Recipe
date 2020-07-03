import React from 'react';
import FindRecipe from './FindRecipe';
import AddRecipe from './AddRecipe';

class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.onSearchCallback = this.onSearchCallback.bind(this);
	}

	onSearchCallback(category) {
		console.log(`Search ${category} recipe!`);
	}

	render() {
		return (
			<div> 
				<FindRecipe onSearchCallback = {this.onSearchCallback} />
				<AddRecipe />
			</div>
		);
	}
}

export default MainPage;