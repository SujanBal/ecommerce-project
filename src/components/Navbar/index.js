import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";
import "./index.css";

export default function index() {
	return (
		<header>
			<Signin />
			<Nav />
		</header>
	);
}
