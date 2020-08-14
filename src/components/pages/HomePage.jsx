import React from 'react';
import Search from '../Search';
import food from '../../img/food.jpeg';


class HomePage extends React.Component {
	constructor(props) {
		super(props);

	}

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