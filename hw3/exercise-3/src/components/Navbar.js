import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
	return (
		<div>
			<ul>
				<NavLink activeclassname="active" to="/">
					<li>Home</li>
				</NavLink>
				<NavLink activeclassname="active" to="search">
					<li>Search</li>
				</NavLink>
				<NavLink activeclassname="active" to="houses">
					<li>Houses</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navbar;
