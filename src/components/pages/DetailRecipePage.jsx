import React from 'react';

class DetailRecipePage extends React.Component {
	//TODO:
	// * Find how to get ID from the URL
	// https://localhost:3000/DetailRecipePage?id=1 or
	// https://localhost:3000/DetailRecipePage/1 or so that you user https://stackoverflow.com/a/45599016

	render() {
		const id = this.props.match.params.id;
		console.log({ gholi: this.props });

	  return (
	  	<div className="detail-recipe-page" >
			<h2>Here is your rercipe in detail { id }</h2>
			{/* <h3>THis is recipe #{id}</h3> */}
		</div>
	  )
	  //TODO: use recipe template here and pass "data" to it as a prop
	}
  }

export default DetailRecipePage ;