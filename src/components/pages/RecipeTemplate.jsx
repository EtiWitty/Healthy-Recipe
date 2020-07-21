import React from 'react';
import data1 from '../../mock/data1.json';


class RecipeTemplate extends React.Component {
	render () {
		return (
			<div>
				<table key={ data1.id }>
					<tr>
						<td>{ data1.title }</td>
						<td>{ JSON.stringify(data1.ingredients) }</td>
						<td>{ data1.calories }</td>
						<td>{ data1.instruction }</td>
						<td>{ data1.tags }</td>
						<a href={ data1.imgURL }>Photo</a>
					</tr>
				</table>
			</div>
		)
	}
}

export default RecipeTemplate;