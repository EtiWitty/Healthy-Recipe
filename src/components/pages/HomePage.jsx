import React from 'react';
import Search from '../Search';
import homeImg from '../../img/homeImg.jpg';


class HomePage extends React.Component {
	render() {
		return (
			<div className="back-image" style={{backgroundImage: `url(${homeImg})`}}> 
				<Search searchRecipe = {this.searchRecipe}/>
			</div>
		);
	}
}

export default HomePage;