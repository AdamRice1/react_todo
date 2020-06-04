import React, { useState } from 'react';
import AddItem from './AddItem';
import Header from './Header';
import '../App.css';

export default function Items(props) {
	const [items] = useState([]);
	let [todo] = useState('');
	//const [items] = useState(props.items);
	function AddToDo(item) {
		console.log(item + 'added item');
		todo = item;
		items.push(todo);
		// console.log(todo);
		// console.log(items);
	}
	function RemoveItem(item) {
		//console.log(item.item);
		for (var i = 0; i < items.length; i++) {
			//console.log('in the for loop');
			//console.log(items[i], item.item);
			if (items[i] === item.item) {
				//console.log('in the if');
				var temp = items[i];
				items[i] = items[items.length - 1];
				items[items.length - 1] = temp;
				console.log(items[items.length - 1] + 'to be popped');
				items.pop();
				console.log(items + 'list item removed');
				//setItems(newItems);
			}
		}
	}

	function resetList() {
		console.log(items + 'reset list');
	}

	return (
		<div id="wrapper">
			<AddItem
				todo={todo}
				AddToDo={AddToDo.bind(props)}
				items={items}
				RemoveItem={RemoveItem.bind(props)}
				resetList={resetList.bind()}
			/>
		</div>
	);
}
