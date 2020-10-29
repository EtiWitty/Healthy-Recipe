import React from 'react';
import { Link } from 'react-router-dom';
import allRecipes from '../../img/allRecipes.jpg';
import axios from 'axios';

class ShowAllRecipesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipesList: []
		};
	}
	
//=============================Get All Recipes==================================
componentDidMount() {
	axios.get('http://localhost:3000/api/getAllRecipeNames')
		.then((res) => {
			this.setState({recipesList: res.data});
			console.log({ res });
		})
		.catch((error) => {
			console.log(error);
		});
}

	render() {
		return (
			<div className="back-image" style={{backgroundImage: `url(${allRecipes})`}}> 
				<table>
					<tbody>
						<tr>
							<td> 
								<ul>
									{
										this.state.recipesList.map((eachRecipe, i) => 
											(<li className="single-recipe" key={i}>
												<Link to={`/detail-recipe/${eachRecipe.id}`}> {eachRecipe.title} </Link>
											</li>)
										)
									}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default ShowAllRecipesPage;