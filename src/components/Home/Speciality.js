import React from "react";
import image from "../../images/me.jpg";
import { Link } from "react-router-dom";
import "./index.css";

export default function Speciality() {
	return (
		<div className="speciality">
			<div className="speciality-item-container">
				<div className="speciality-item">
					<div className="speciality-item-link">
						<Link to="/shop">
							Most <br />
							Popular
						</Link>
					</div>
					<div className="speciality-info"></div>
					<img src={image} alt="me" />
				</div>
				<div className="speciality-item">
					<div className="speciality-item-link">
						<Link to="/shop">
							Shop By <br />
							Receipe
						</Link>
					</div>

					<div className="speciality-info"></div>
					<img src={image} alt="me" />
				</div>
				<div className="speciality-item">
					<div className="speciality-item-link">
						<Link to="/shop">
							Special <br />
							Offers
						</Link>
					</div>

					<div className="speciality-info"></div>
					<img src={image} alt="me" />
				</div>
			</div>
		</div>
	);
}
