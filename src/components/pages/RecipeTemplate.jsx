import React from 'react';

class RecipeTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		// TODO: axios.get("backend/getRecipeData", { id: this.props.id })
		import(`../../mock/data${this.props.id}.json`)
			.then((jsonData) => {
				this.setState({
					...this.state,
					content: jsonData
				});
			});
	}

	render () {
		// let ingredient = JSON.stringify(data1.ingredients);
		// let s = '';
		// let a = [];
		// for (let i = 0; i < data1.ingredients.length; i++) {
		// 		s += ` ${i}`;
		// 		a.push(ingredients[i]);
		// }

		return (
			<div className="recipe-template">
				{ !this.state.content ? (
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