import React from 'react';

class AdminDashboard extends React.Component {
	
	render() {
	  	return(
			<div className="add-recipe">
				<h2> Welcome to the Admin Dashboard </h2>
				<input className="recipe-title"
						type="text"  
						placeholder="What is the title?" 
				/>

				<input className="recipe-ingredients"
						type="text"  
						placeholder="Add your ingredients" 
				/>

				<br />

				<input className="recipe-quantity"
						type="text"  
						placeholder="How much / How many?" 
				/>

				<input className="recipe-calories"
						type="text"  
						placeholder="Calories" 
				/>

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
				/>

				<button className="submit-btn">Submit your recipe!</button>

			</div>
		)
	}
}

export default AdminDashboard;