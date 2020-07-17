import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
	
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		const category = event.target.value;
		this.props.onSearchCallback(category);
		event.preventDefault();
	}

	render() {
		return (
			<div className="search-button">
				<input type="button" value="search" onClick={this.handleSearch}/>
			</div>
		)
	}
}

export default Search;