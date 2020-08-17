import React from 'react';
import Search from '../Search';
import food from '../../img/food.jpeg';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
//import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

class HomePage extends React.Component {
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