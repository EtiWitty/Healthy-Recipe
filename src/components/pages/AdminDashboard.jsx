import React from 'react';

class AdminDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			calories: 0,
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(event) {
		this.setState({title: event.target.value});
	}

	handleCaloriesChange(event) {
		this.setState({calories: event.target.value});
	}

	handleSubmit(event) {
		alert(`Title is: ${this.state.title} and calories is ${this.state.calories}`);
		event.preventDefault();
	  }
	
	render() {
	  	return(
			<form className="add-recipe" onSubmit={this.handleSubmit}>
				<h2> Welcome to the Admin Dashboard </h2>
				<input className="recipe-title"
						type="text"  
						placeholder="What is the title?"
						onChange={this.handleTitleChange}
				/>

				{/* <input className="recipe-ingredients"
						type="text"  
						placeholder="Add your ingredients" 
				/>

				<br />

				<input className="recipe-quantity"
						type="text"  
						placeholder="How much / How many?" 
				/> */}

				<input className="recipe-calories"
						type="text"  
						placeholder="Calories" 
						onChange={this.handleCaloriesChange}
				/>
{/* 
				<button className="add-btn">Add more</button>

				<input className="recipe-image"
						type="text"  
						placeholder="Upload your image" 
				/>

				<input className="recipe-instruction"
						type="text"  
						placeholder="Instruction" 
				/>

				<input className="recipe-tag"
						type="text"  
						placeholder="Tag the recipe" 
				/> */}

				<input type="submit" className="submit-btn" value="Submit New Recipe" />

			</form>
		)
	}
}

export default AdminDashboard;