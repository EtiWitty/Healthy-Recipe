import React from 'react';
import UserProfile from '../UserProfile';
import Header from '../Header';

class UserInfo extends React.Component {
	
	render() {
	  	return(
			<div>
                <Header />
				<UserProfile />
			</div>
		)
	}
}

export default UserInfo;