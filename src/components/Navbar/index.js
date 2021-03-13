import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";

export default function index() {
	return (
		<header className="navbar">
			<Signin />
			<Nav />
		</header>
	);
}
