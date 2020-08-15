import React from 'react';
import Search from '../Search';
import food from '../../img/food.jpeg';
import axios from 'axios';
import DetailRecipePage from './DetailRecipePage';


class HomePage extends React.Component {
	constructor(props) {
		super(props);

	}

	//Find Recipe by name
	// findRecipe = (name) => {
	// 	axios.get(`http://localhost:8000/detail-recipe/${recipeSchema.name}`)
	// 		.then(res => this.setState({
	// 			recipe: res.data
	// 		}));
	// }


	render() {
		return (
			
			<div className="back-image" style={{backgroundImage: `url(${food})`}}> 
				<h3>Welcome to my recepies world!</h3>
				<Search 
					searchRecipe = {this.searchRecipe}
				/>
			</div>
		);
	}
}

export default HomePage;