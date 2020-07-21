import React from 'react';
import data from '../../mock/data.json';


class RecipeTemplate extends React.Component {
	render () {
		return (
			<div>
				{ 
					data.map ((data) => {
						return (
							<div>
								<table key={ data.id }>
									<tr>
										<td>{ data.title }</td>
										<td>{ data.ingredients }</td>
										<td>{ data.calories }</td>
										<td>{ data.instruction }</td>
										<td>{ data.tags }</td>
										<a href={ data.imgURL }>Photo</a>
									</tr>
								</table>
							</div>
						)
					}
				)}
			</div>
		)
	}
}

export default RecipeTemplate;