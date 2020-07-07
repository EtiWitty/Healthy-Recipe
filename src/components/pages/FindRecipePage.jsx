import React from 'react';

class FindRecipePage extends React.Component {
	constructor(props) {
		super(props);
	
		// this.handleSearch = this.handleSearch.bind(this);
	}

	// handleSearch(event) {
	// 	const category = event.target.value;
	// 	this.props.onSearchCallback(category);
	// 	event.preventDefault();
	// }

	render() {
	  	return(
	  		<div>
				<h2>Find your desired recipe</h2>
				<br />

				{/* <input type="button" value="search" onClick={this.handleSearch}/> */}
		  	</div>
		)
	}
}

export default FindRecipePage;