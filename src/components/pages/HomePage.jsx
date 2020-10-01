import React from 'react';
import Search from '../Search';
import homeImg from '../../img/homeImg.jpg';
import Header from '../Header';


class HomePage extends React.Component {
	render() {
		return (
			<div className="back-image" style={{backgroundImage: `url(${homeImg})`}}> 
				<Header />
				<Search />
                <div className="footer">Footer</div>
			</div>
		);
	}
}

export default HomePage;