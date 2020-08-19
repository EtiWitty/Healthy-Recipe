import React from 'react';
import { Link } from 'react-router-dom';
import allRecipes from '../../img/allRecipes.jpg';
import axios from 'axios';



class ShowAllRecipesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: {}
		};
	}
	
//=============================Get All Recipes==================================
componentDidMount() {
	axios.get('http://localhost:8000/api/getAllRecipeNames')
		.then((res) => {
			this.setState({recipe: res.data});
			console.log({ res });
		})
		.catch((error) => {
			console.log(error);
		});
}

	render() {
		return (
			// <div className='recipe-detail internal-page'>
			<div className="back-image" style={{backgroundImage: `url(${allRecipes})`}}> 
				<Link to='/detail-recipe/1'>Go to Recipe 1</Link>
				<br></br>
				<Link to='/detail-recipe/2'>Go to Recipe 2</Link>
				<br></br>
				<Link to='/detail-recipe/3'>Go to Recipe 3</Link>
				<br></br>
				<Link to='/detail-recipe/4'>Go to Recipe 4</Link>
				<br></br>
				<Link to='/detail-recipe/5'>Go to Recipe 5</Link>
			</div>
		)
	}
  }

export default ShowAllRecipesPage;