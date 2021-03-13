import React from "react";
import image from "../../images/me.jpg";
import { Link } from "react-router-dom";
import "./index.css";

export default function Speciality() {
	return (
		<div className="speciality">
			<div className="speciality-item">
				<div className="speciality-info">
					<Link to="/shop">
						<h4>Most Popular </h4>
					</Link>
				</div>
				<img src={image} alt="me" />
			</div>
			<div className="speciality-item">
				<div className="speciality-info">
					<Link to="/shop">
						<h4>Shop By Receipe </h4>
					</Link>
				</div>
				<img src={image} alt="me" />
			</div>
			<div className="speciality-item">
				<div className="speciality-info">
					<Link to="/shop">
						<h4>Special Offers</h4>
					</Link>
				</div>
				<img src={image} alt="me" />
			</div>
		</div>
	);
}
