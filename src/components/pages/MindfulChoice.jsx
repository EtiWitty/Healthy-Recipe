import React from 'react';
import mindfulChoiceImg from '../../img/mindfulChoiceImg.jpg';
import axios from 'axios';

class MindfulChoice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: {
				reviews: [],
				reviewImages: []
			}
		}
		
		axios({
			"method": "GET",
			"url": "https://yummly2.p.rapidapi.com/reviews/list",
			"headers": {
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"yummly2.p.rapidapi.com",
				"x-rapidapi-key":"1f62f9b4dfmshe95a736497421c2p109639jsn21895ada1722",
				"useQueryString":true
			},
			"params":{
				"offset": "0",
				"globalId": "a8d6747a-bfaa-46a7-92fb-892e3f76b264",
				"limit": "20"
			}
		})
		.then((response)=>{
			this.setState({
				result: response.data
			})
			console.log(response)
		})
		.catch((error)=>{
			console.log(error)
		});
	}
	

	render() {
	  return (
		<div className="back-image" style={{backgroundImage: `url(${mindfulChoiceImg})`}}> 
			<h2>Mindful Food Choice</h2>
			{/* <pre>{ JSON.stringify(this.state.result) }</pre> */}
			{/* <p>{this.state.result.reviews.map((res) => <div>{JSON.stringify(res)}</div>)}</p> */}
			<p>{this.state.result.reviewImages.map((reviewImg) => <img src={reviewImg.resizableImageUrl} />)}</p>
			<div className="footer">Footer</div>
		</div>
	  )
	}
  }

export default MindfulChoice;