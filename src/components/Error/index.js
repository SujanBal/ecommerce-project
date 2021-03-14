import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function index() {
	return (
		<main className="error">
			<div className="homepage-link">
				<Link to="/">Go Back Home</Link>
			</div>

			<h1>No page found.</h1>
		</main>
	);
}
