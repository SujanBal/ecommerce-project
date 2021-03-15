import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

export default function Signin() {
	return (
		<div className="header-top">
			<div className="header-top-left">
				<span className="customer-care">
					<span className="span-gray">Customer Care</span>+977-9864118047
				</span>
				<span className="icons-location">
					<i className="fas fa-map-marker-alt header-icons"></i>
					<Link to="#">Store Location</Link>
				</span>
				<span className="icons-mobile">
					<i className="fas fa-mobile-alt header-icons"></i>
					<Link to="#">Download App</Link>
				</span>
			</div>

			<div className="header-top-right">
				<span className="signup">
					<Link to="#">Sign Up / Log In</Link>
				</span>
				<span className="bar">|</span>
				<span className="mylist">
					<i className="far fa-heart header-icons"></i>
					<Link to="#">My List</Link>
				</span>
			</div>
		</div>
	);
}
