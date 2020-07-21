import React from 'react';
import RecipeTemplate from './RecipeTemplate';
import data1 from '../../mock/data1.json';

class DetailRecipePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const id = this.props.match.params.id;
		console.log({ gholi: this.props });

	  return (
	  	<div className="detail-recipe-page" >
			<h2>Here is your rercipe { id } in detail </h2>
			<RecipeTemplate recipeData={this.props.recipeData}/>
		</div>
	  )
	  //TODO: use recipe template here and pass "data" to it as a prop
	}
  }

export default DetailRecipePage ;