import React, { useState } from 'react';
import Header from './Header';
import Items from './Items';

export default function AddItem(props) {
	let [todo, setItem] = useState('');
	// React.useEffect(() => {
	// 	console.log('using effect' + props.items);
	// });
	// function HandleRemove(){
	//     props.resetList(e)
	// }
	console.log(props.items);
	return (
		<div>
			<div id="mainList">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">To Do</th>
							<th scope="col">Remove From List</th>
						</tr>
					</thead>
					<tbody>
						{props.items.map(item => (
							<tr>
								<td>
									<input
										style={{ marginRight: '15px' }}
										id="ossm"
										name="ossm"
										type="checkbox"
									/>
									<label className="done" for="ossm">
										{item}
									</label>
								</td>
								<td>
									{' '}
									<form
										className="toDel"
										onSubmit={e => {
											//setItem(e.target.value);
											props.RemoveItem({ item });
											e.preventDefault();
										}}
									>
										<input
											type="submit"
											value="Remove"
											className="btn btn-danger"
										/>
									</form>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<form
				onSubmit={e => {
					setItem(e.target.value);
					props.AddToDo(todo);
					e.preventDefault();
				}}
			>
				<input
					type="text"
					name="item"
					value={todo}
					//onChange={e => props.AddToDo(e.target.value)}
					onChange={e => setItem(e.target.value)}
				/>
				<input
					type="submit"
					value="Add To Do"
					style={{ marginLeft: '15px' }}
				/>
			</form>
			<form onSubmit={props.resetList()}>
				<input
					className="btn btn-success"
					type="submit"
					value="Reset List"
					style={{ marginLeft: '15px', marginTop: '15px' }}
				/>
			</form>
			<p style={{ marginTop: '15px' }}>CheckBox If To Do Completed</p>
		</div>
	);
}
