import React from 'react';
import Search from '../Search';
import HealthyFood from '../../img/HealthyFood.jpeg';


class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.onSearchCallback = this.onSearchCallback.bind(this);
	}

	onSearchCallback(category) {
		console.log(`Search ${category} recipe!`);
	}

	render() {
		return (
			<div style={{background: `url(${HealthyFood})`}}> 
				<Search onSearchCallback = {this.onSearchCallback} />
			</div>
		);
	}
}

export default HomePage;