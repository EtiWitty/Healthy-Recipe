import React from 'react';
// import FindRecipePage from './FindRecipePage';
// import AddRecipePage from './AddRecipePage';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		// this.onSearchCallback = this.onSearchCallback.bind(this);
	}

	// onSearchCallback(category) {
	// 	console.log(`Search ${category} recipe!`);
	// }

	render() {
		return (
			<div> 
				<h2>This is Home</h2>
				{/* <FindRecipePage onSearchCallback = {this.onSearchCallback} />
				<AddRecipePage /> */}
			</div>
		);
	}
}

export default HomePage;