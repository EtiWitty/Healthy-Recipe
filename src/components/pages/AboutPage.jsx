import React from 'react';
import aboutImg from '../../img/aboutImg.jpg';
import Header from '../Header';

class AboutPage extends React.Component {
	
	render() {
	  return (
		  // <div className="about-page internal-page" >
		<div className="back-image" style={{backgroundImage: `url(${aboutImg})`}}> 
				<Header />
				<p className="internal-page">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className="footer">Footer</div>
		</div>
	  )
	}
  }

export default AboutPage;