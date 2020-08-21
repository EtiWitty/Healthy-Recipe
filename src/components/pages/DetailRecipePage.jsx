import React from 'react';
import RecipeTemplate from './RecipeTemplate';
import { Link } from 'react-router-dom';

class DetailRecipePage extends React.Component {
	render() {
		// this is how we get id in react-router
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