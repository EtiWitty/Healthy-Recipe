import React from 'react';
import RecipeTemplate from './RecipeTemplate';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DetailRecipePage extends React.Component {
	render() {
		const id = this.props.match.params.id;
		// console.log({ gholi: this.props });

	  return (
	  	<div className="detail-recipe-page" >
			<RecipeTemplate id={ id } />
			<br />
			<button className="more-recipes-btn">
				<Link to="/show-all-recipes">More Recipes</Link>
			</button>
		</div>
	  )
	}
  }

export default DetailRecipePage ;