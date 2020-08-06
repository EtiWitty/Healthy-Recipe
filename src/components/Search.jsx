import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	
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
				<form>
					<label>
						<input 
							type="text"  
							value="Find your favorite dish" 
							onClick={this.handleSearch}/>
					</label>
				</form>
			</div>
		)
	}
}

export default Search;