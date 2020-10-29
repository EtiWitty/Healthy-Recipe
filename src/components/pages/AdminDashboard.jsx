import React from 'react';
import axios from 'axios';

class AdminDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			calories: 0,
			imgURL:"",
			instruction:""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
		  [event.target.name]: event.target.value
		});
	  }

	handleSubmit(event) {
		alert(`Title is: ${this.state.title} and calories is ${this.state.calories}`);
		event.preventDefault();
		//TODO: PUT THE HOST ON CONST ( USE IT ACCROS THE WHOLE APP)
		axios.post(`http://localhost:3000/api/addRecipe`, this.state)
			.then((res) => {
				// this.setState({results: res.data });
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			})
	  }
	
	render() {
	  	return(
			<form className="add-recipe" onSubmit={this.handleSubmit}>
				<h2> Welcome to the Admin Dashboard </h2>
				<input className="recipe-title"
						type="text"  
						placeholder="What is the title?"
						name="title"
						onChange={this.handleInputChange}
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
					   name="calories"
					   onChange={this.handleInputChange}
				/>
 
				<button className="add-btn">Add more</button>

				<input className="recipe-image"
					   type="text"  
					   placeholder="image url" 
					   name="imgURL"
					   onChange={this.handleInputChange}
				/>

				<textarea className="recipe-instruction"
						  type="text"  
						  placeholder="Instruction" 
						  name="instruction"
						  onChange={this.handleInputChange}
				/>

				{/* <input className="recipe-tag"
						type="text"  
						placeholder="Tag the recipe" 
				/>  */}

				<input type="submit" 
					   className="submit-btn" 
					   value="Submit New Recipe" />

			</form>
		)
	}
}

export default AdminDashboard;