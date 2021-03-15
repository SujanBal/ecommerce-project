import React, { useState, useEffect, useCallback } from "react";
import slider from "./data";
import "./index.css";

export default function Hero() {
	const [backgrounds] = useState(slider);
	// setbackgrounds
	const [backgroundindex, setbackgroundindex] = useState(0);

	useEffect(() => {
		document.querySelector("#searchref").value = null;
	}, []);

	const checknum = useCallback(
		(newindex) => {
			if (newindex < 0) {
				return backgrounds.length - 1;
			}
			if (newindex > backgrounds.length - 1) {
				return 0;
			}
			return newindex;
		},
		[backgrounds.length]
	);

	const rightHandler = () => {
		setbackgroundindex(checknum(backgroundindex + 1));
	};
	const leftHandler = () => {
		setbackgroundindex(checknum(backgroundindex - 1));
	};

	useEffect(() => {
		let interval = setInterval(() => {
			setbackgroundindex(checknum(backgroundindex + 1));
		}, 7000);
		return () => {
			clearInterval(interval);
		};
	}, [backgroundindex, checknum]);
	return (
		<section className="slider">
			{backgrounds.map((background, index) => {
				let position = "next";
				if (backgroundindex === index) {
					position = "active";
				}
				if (
					index === backgroundindex - 1 ||
					(backgroundindex === 0 && index === backgrounds.length - 1)
				) {
					position = "last";
				}
				const { id, image } = background;
				return (
					<div className={`slider-background ${position}`} key={id}>
						<img src={image} alt="background" />
					</div>
				);
			})}
			<div className="slider-button-div left">
				<button onClick={leftHandler}>
					<i className="fas fa-chevron-left"></i>
				</button>
			</div>
			<div className="slider-button-div right">
				<button onClick={rightHandler}>
					<i className="fas fa-chevron-right"></i>
				</button>
			</div>
			<div className="slider-info">
				<div className="slider-info-heading">
					<h1>S-Cocktail</h1>
					<h1>Is</h1>
					<h1>Back In Town</h1>
				</div>
				<div className="slider-info-text">
					Faster ordering with a whole new search and navigate. Shop your last
					order with just a one click.
				</div>
				<div className="slider-info-button">
					<button>Read More</button>
				</div>
			</div>
		</section>
	);
}
