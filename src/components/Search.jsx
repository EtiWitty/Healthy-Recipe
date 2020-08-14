import React from 'react';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => this.setState({
		 value: e.target.value
	});

	onSubmit = (e) => {
		e.preventDefault();
		this.props.SearchRecipe(this.state.title)
		this.setState({
			title: ''
		});
	}

	render() {
		return (
			<div>
				<form>
					<input 
						type="text"  
						placeholder="Search Your Dish..." 
						style={{ flex: '10', padding: '5px' }}
						value={this.props.title}
						onChange={this.onChange}
					/>

					<input 
						className="btn"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		)
	}
}


export default Search;