import React from "react";
import "./index.css";

export default function Connect() {
	return (
		<section className="connect">
			<div className="connect-items">
				<h1>Newsletter Signup</h1>
				<div className="connect-items-second">
					<input placeholder="Enter Your Email" />
					<button>Subscribe</button>
				</div>
			</div>
			<div className="connect-items">
				<h1>Connect with us</h1>
				<div className="connect-items-second">
					<input />
					<button>Subscribe</button>
				</div>
			</div>
			<div className="connect-items">
				<h1>Download App</h1>
				<div className="connect-items-second">
					<input />
					<button>Subscribe</button>
				</div>
			</div>
		</section>
	);
}
