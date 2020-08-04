import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './Items';
import '../App.css';

export default function Header(props) {
	const [name, setName] = useState('Adam');
	// function handleNameChange(e) {
	// 	setName(e.target.value);
	// }

	return (
		<div id="mainBody">
			<nav className="navbar">
				<ul style={{ listStyle: 'none' }}>
					<li>
						<h2 id="title">{name}'s To Do List</h2>
					</li>
				</ul>
			</nav>
			<Items name={name} />
		</div>
	);
}
