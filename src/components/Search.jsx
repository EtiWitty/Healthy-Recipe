import React from 'react';


export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
	};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	onChange = (e) => this.setState({
		 value: e.target.value
	});

	onSubmit = (e) => {
		debugger;
		e.preventDefault();
		this.props.SearchRecipe(this.state.title)
		this.setState({
			title: ''
		});
	}

	render() {
		return (
			<div>
				<form className="search-form">
					<input 
						className="search-bar"
						type="text"  
						placeholder="Search Your Dish..." 
						value={this.props.title}
						onChange={this.onChange}
						onSubmit={this.onSubmit}
					/>
					<input
						className="submit-btn" 
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		)
	}
}


export default Search;