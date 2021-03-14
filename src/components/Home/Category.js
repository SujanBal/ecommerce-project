import React, { useState } from "react";
import { category } from "./data";
import { Link } from "react-router-dom";
import "./index.css";

export default function Category() {
	const [categories] = useState(category);
	// setcategories
	return (
		<section className="category">
			{categories.map((category) => {
				const { id, image, name, title } = category;
				return (
					<div className="category-items" key={id}>
						<img src={image} alt={name} />
						<Link to="/shop">
							<h4>{name}</h4>
						</Link>
						<h4>{title}</h4>
						<Link to="/shop">View All</Link>
					</div>
				);
			})}
		</section>
	);
}
