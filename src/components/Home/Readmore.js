import React from "react";
import image from "../../images/me.jpg";

export default function Readmore() {
	return (
		<section className="readmore">
			<div className="readmore-items">
				<img src={image} alt="me" />
				<div className="readmore-info">
					<h1>asdfasdf</h1>
					<h1>asdfassssssdf</h1>
					<h1>assdf</h1>
					<button>Read More</button>
				</div>
			</div>
			<div className="readmore-items">
				<img src={image} alt="me" />
				<div className="readmore-info">
					<h1>asdfasdf</h1>
					<h1>asdfassssssdf</h1>
					<h1>assdf</h1>
					<button>Read More</button>
				</div>
			</div>
		</section>
	);
}
