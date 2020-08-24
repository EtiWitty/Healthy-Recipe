import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			results: [],
	};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	onChange = (e) => {
		this.setState({
			title: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const title = this.state.title; 
		axios.post(`http://localhost:8000/api/searchRecipe`, {
			title
		})
			.then((res) => {
				this.setState({ results: res.data });
			})
			.catch((error) => {
				console.log(error);
			})
	}


	render() {
		return (
			<div>
				<form className="search-form"
					onSubmit={this.onSubmit}
				>
					<input 
						className="search-bar"
						type="text"  
						placeholder="Search Your Dish..." 
						value={this.props.title}
						onChange={this.onChange}
					/>
					<input
						className="submit-btn" 
						type="submit"
						value="Submit"
					/>
				</form>
				{ this.state.results.length === 0 ? "" : (
					<div className="search-results">
						<h3>Results:</h3> 
						<ul>
						{ this.state.results.map((eachRecipe, i) => (
							<li key={i}>
								<Link to={`/detail-recipe/${eachRecipe._id}`}> {eachRecipe.title} </Link>
							</li>))
						}
						</ul>
					</div>
				)}
			</div>
		)
	}
}


export default Search;