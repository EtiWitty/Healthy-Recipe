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
			<Link to="/show-all-recipes">&lt; Back</Link>
			{/* <h2>Here is your rercipe { id } in detail </h2> */}
			<RecipeTemplate id={ id } />
		</div>
	  )
	  //TODO: use recipe template here and pass "data" to it as a prop
	}
  }

export default DetailRecipePage ;