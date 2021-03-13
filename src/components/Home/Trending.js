import React from "react";
import useDefaultContext from "../../context";

export default function Trending() {
	const { isLoading, trending } = useDefaultContext();

	if (isLoading) {
		return (
			<section className="trending">
				<h1>What's Trending</h1>
				<div className="trending-items">
					<div className="trending-item">
						<h2>Loading...</h2>
					</div>
				</div>
			</section>
		);
	}
	return (
		<section className="trending">
			<h1>What's Trending</h1>
			<div className="trending-items">
				{trending.map((trendingitems) => {
					const {
						id,
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					} = trendingitems;

					return (
						<div className="trending-item" key={id}>
							<img src={image} alt={name} />
							<h3>{name}</h3>
							<h4>{info}</h4>
							<h4>{category}</h4>
							<h5>{instructions}</h5>
						</div>
					);
				})}
			</div>
		</section>
	);
}
