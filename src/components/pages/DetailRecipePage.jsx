import React from 'react';
import RecipeTemplate from './RecipeTemplate';
import { Link } from 'react-router-dom';

class DetailRecipePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const id = this.props.match.params.id;
		// console.log({ gholi: this.props });

	  return (
	  	<div className="detail-recipe-page" >
			<RecipeTemplate id={ id } />
			<br />
			<Link to="/show-all-recipes">&lt; More Recipes</Link>
		</div>
	  )
	}
  }

export default DetailRecipePage ;