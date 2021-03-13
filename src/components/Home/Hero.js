import React, { useState, useEffect, useCallback } from "react";
import people from "./data";
import "./index.css";

export default function Hero() {
	const [backgrounds, setbackgrounds] = useState(people);
	const [backgroundindex, setbackgroundindex] = useState(0);

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
		<section className="hero">
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
					<div className={`background ${position}`} key={id}>
						<img src={image} alt="background" />
					</div>
				);
			})}
			<div className="slider-button">
				<button onClick={leftHandler}>left</button>
				<button onClick={rightHandler}>right</button>
			</div>
			<div className="hero-info">
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
					consequuntur accusamus itaque debitis totam ab similique vitae. Harum
					minus doloremque quos numquam praesentium maiores fugit aspernatur
					laborum, quo, ad eveniet?
				</h3>
				<button>Read More</button>
			</div>
		</section>
	);
}
