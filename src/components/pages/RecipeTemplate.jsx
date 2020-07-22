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
			<div>
				{ !this.state.content ? (
					<h2>loading</h2>
				) : (
					<table key={ this.state.content.id }>
					<tbody>
						<tr>
							<th>
								{ this.state.content.title } 
								
							</th>
						</tr>

						<tr>
							<td> 
								<h5>Ingredients</h5>
								<br /> 
								{ 
									this.state.content.ingredients.map((ingredient, i) => (
										<div key={i}>
											{/* 	<s>{x}</s> <hr /> */}
											{ingredient.name + "-" + ingredient.quantity} 
										</div> 
									))
								} 
							</td>
						</tr>

						<tr>
							<td> 
								<h5>Calorie</h5> 
								{ this.state.content.calories }
							</td>
						</tr>

						<tr>
							<td> 
								<h5>Instruction:</h5> 
								{ this.state.content.instruction }
							</td>
						</tr>

						<tr>
							<td> 
								<h5>Tags</h5> 
								{ this.state.content.tags }
							</td>
						</tr>

						<tr>
							<td>
								<img src={ this.state.content.imgURL } />
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