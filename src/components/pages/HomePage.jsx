import React from 'react';
import Search from '../Search';
import homeImg from '../../img/homeImg.jpg';
import LoginButton from '../LoginButton';


class HomePage extends React.Component {
	render() {
		return (
			<div className="back-image" style={{backgroundImage: `url(${homeImg})`}}> 
				<div><LoginButton /></div>
				<Search />
                <div className="footer">Footer</div>
			</div>
		);
	}
}

export default HomePage;