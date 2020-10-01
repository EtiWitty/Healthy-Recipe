import React from 'react';
import mindfulChoiceImg from '../../img/mindfulChoiceImg.jpg';
import Header from '../Header';

class MindfulChoice extends React.Component {
	
	render() {
	  return (
		<div className="back-image" style={{backgroundImage: `url(${mindfulChoiceImg})`}}> 
			<Header />
	  		{/* <div className="mindful-choice-page internal-page"> */}
				<h2>Mindful Food Choice</h2>
				<div className="footer">Footer</div>
		</div>
	  )
	}
  }

export default MindfulChoice;