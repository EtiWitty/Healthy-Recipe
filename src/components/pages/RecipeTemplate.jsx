import React from 'react';
import data1 from '../../mock/data1.json';


class RecipeTemplate extends React.Component {
	render () {
		let ingredient = JSON.stringify(data1.ingredients);
		let s = '';
		let a = [];
		for (let i = 0; i < 10; i++) {
			s += `<u> Hi </u> + ${i}`;
			a.push(i);
		}
		return (
			<div>
				<table key={ data1.id }>
					<tr>
						<tr>
							<th>
								{ data1.title } and { s }
								<br /> 
								{ 
									a.map((x) => (
										<div>
											<s>{x}</s> <hr />
										</div> 
									))
								}
							</th>
						</tr>

						<tr>
							<td>{ ingredient }</td>
						</tr>

						<tr>
							<td>{ data1.calories }</td>
						</tr>

						<tr>
							<td>{ data1.instruction }</td>
						</tr>

						<tr>
							<td>{ data1.tags }</td>
						</tr>

						<a href={ data1.imgURL }>Photo</a>
					</tr>
				</table>
			</div>
		)
	}
}

export default RecipeTemplate;