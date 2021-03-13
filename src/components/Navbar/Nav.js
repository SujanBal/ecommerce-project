import React from "react";
import "./Nav.css";
import useDefaultContext from "../../context";
import { Link } from "react-router-dom";

export default function Nav() {
	const {
		searchitem,
		total_price,
		searchHandler,
		searchFormHandler,
	} = useDefaultContext();
	return (
		<nav className="nav">
			<div className="nav-search">
				<h1 className="nav-logo">S-Cocktail</h1>
				<form className="form" onSubmit={searchFormHandler}>
					<input
						placeholder="eg. Martini"
						value={searchitem}
						onChange={searchHandler}
					/>
					<button type="submit">S</button>
				</form>
				<div>
					<h4>totalprice</h4>
				</div>
			</div>
			<div className="nav-items">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/contacts">Contacts</Link>
			</div>
		</nav>
	);
}
