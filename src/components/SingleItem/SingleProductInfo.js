import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useDefaultContext from "../../context";
import "./index.css";

export default function SingleProductInfo() {
	const { id: productid } = useParams();
	const [isLoading, setisLoading] = useState(true);
	const { fetchsingle, singleitem, ordernow } = useDefaultContext();

	useEffect(() => {
		document.querySelector("#searchref").value = null;
	}, []);

	useEffect(() => {
		setisLoading(true);
		fetchsingle(productid);
		const timeout = setTimeout(() => {
			setisLoading(false);
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, [productid, fetchsingle]);
	if (isLoading) {
		return (
			<div className="singleproduct-loading">
				<h1>Loading...</h1>
			</div>
		);
	}
	const {
		id,
		name,
		image,
		info,
		category,
		glass,
		instructions,
		ingredients,
	} = singleitem;
	return (
		<div className="singleproduct-container">
			<div className="singleproduct-secondcontainer">
				<div className="backtoshop">
					<Link to="/shop">Back To Shop</Link>
				</div>
				<div className="singleproduct" key={id}>
					<div className="singleproduct-image">
						<img src={image} alt={name} />
					</div>
					<div className="singleproduct-details">
						<p>
							<span>Name :</span>
							{name}
						</p>
						<p>
							<span>Category :</span>
							{category}
						</p>
						<p>
							<span>Info :</span>
							{info}
						</p>
						<p>
							<span>Price :</span>${`${id}`.slice(0, 3)}
						</p>
						<p>
							<span>Glass :</span>
							{glass}
						</p>
						<p>
							<span className="ingredients">Instructions:</span>
							{instructions}
						</p>
						<p>
							<span className="ingredients">Ingredients :</span>
							{ingredients &&
								ingredients.map((ingredient, index) => {
									return ingredient ? (
										<span className="ingredients-list" key={index}>
											{ingredient}
										</span>
									) : null;
								})}
						</p>

						<button className="ordernow" onClick={() => ordernow(id)}>
							Order Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
