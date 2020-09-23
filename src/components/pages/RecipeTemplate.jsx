import React from 'react';
import axios from 'axios';


class RecipeTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: {}
		};
	//=======================GET SINGLE RECIPE===================================================
	axios.get(`http://localhost:8000/api/getSingleRecipe/${this.props.id}`) // this.props.title
		.then((res) => {
			this.setState({ content: res.data});
			console.log({ res });
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render () {
		return (
			<div className="recipe-template">
				{/* if content doesn't exists( in the begining) || the object is empty */}
				{ !this.state.content || Object.keys(this.state.content).length === 0 ? (
					<h2>loading</h2>
				) : (
					<table key={ this.state.content.id }>
					<tbody>
						<tr>
							<th>
								<h3>{ this.state.content.title }</h3> 
							</th>
						</tr>

						<tr>
							<td> 
								<img className="recipe-img" src={ this.state.content.imgURL } />
								<h6>Ingredients</h6>
								<ul>
								{ 
									this.state.content.ingredients.map((ingredient, i) => (
										<li key={i}>
											{ingredient.name}: {ingredient.quantity} 
										</li> 
									))
								} 
								</ul>
							</td>
						</tr>

						<tr>
							<td> 
								<h6>
									<span>Instruction:</span>
								</h6> 
								<p>
									<span>
										{ this.state.content.instruction }
									</span>
								</p>
							</td>
						</tr>

						<tr>
							<td> 
								<h6>Calories</h6> 
								<p>{ this.state.content.calories }</p>
							</td>
						</tr>

						<tr>
							<td> 
								<h6>Tags</h6> 
								<p>{ this.state.content.tags }</p>
							</td>
						</tr>
					</tbody>
				</table>
				)}
			</div>
		)
	}
}

export default RecipeTemplate;