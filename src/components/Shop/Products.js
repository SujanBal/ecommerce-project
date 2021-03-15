import React, { useState, useEffect } from "react";
import useDefaultContext from "../../context";
import { Link } from "react-router-dom";
import "./index.css";

export default function Products() {
	const [isLoading, setisLoading] = useState(true);
	const { searchitem, items } = useDefaultContext();
	useEffect(() => {
		document.querySelector("#searchref").value = searchitem;
		document.querySelector("#searchref").focus();
	}, [searchitem]);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setisLoading(false);
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	if (isLoading) {
		return (
			<div className="products-loading">
				<h1>Loading...</h1>
			</div>
		);
	}
	return (
		<section className="products">
			<div className="products-items-container">
				<div className="products-items-count">
					Showing all {items.length} results
				</div>
				<div className="products-items">
					{items.map((item) => {
						const { id } = item;
						return <SingleProduct key={id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}

const SingleProduct = ({ id, image, name, category }) => {
	const [showreadmore, setshowreadmore] = useState(false);
	const { removesingleitem } = useDefaultContext();
	return (
		<div
			key={id}
			className="product"
			onMouseOver={() => setshowreadmore(true)}
			onMouseOut={() => setshowreadmore(false)}
		>
			<img src={image} alt={name} />
			<h5>{category}</h5>
			<h4>{name}</h4>
			<h4>${`${id}`.slice(0, 3)}</h4>
			<Link to={`/products/${id}`}>
				<div
					className={`product-readmore ${showreadmore && "showreadmore"}`}
					onClick={removesingleitem}
				>
					Read More
				</div>
			</Link>
		</div>
	);
};
