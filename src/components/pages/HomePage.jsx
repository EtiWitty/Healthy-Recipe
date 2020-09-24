import React from 'react';
import Search from '../Search';
import homeImg from '../../img/homeImg.jpg';
import SignInButton from '../SignInButton';
import SignOutButton from '../SignOutButton';
import UserProfile from '../UserProfile';


class HomePage extends React.Component {
	render() {
		return (
			<div className="back-image" style={{backgroundImage: `url(${homeImg})`}}> 
			<>
				<SignInButton />
				<SignOutButton />
				<UserProfile />
			</>
				<Search />
                <div className="footer">Footer</div>
			</div>
		);
	}
}

export default HomePage;