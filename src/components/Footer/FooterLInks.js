import React, { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";
import "./index.css";

export default function FooterLInks() {
	const [footerlinks, setfooterlinks] = useState(data);
	return (
		<footer className="footer">
			<div className="footerlinks">
				{footerlinks.map((footerlink, index) => {
					const { title, links } = footerlink;
					return (
						<div className="links-container" key="index">
							<h3>{title}</h3>
							<ul className="links">
								{links.map((linkitem) => {
									const { url, link } = linkitem;
									return (
										<li>
											<Link to={url}>{link}</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
			<div className="copyright">
				<h5>
					Privacy Policy / This is a sample website - cmsmasters © 2020 / All
					Rights Reserved
				</h5>
			</div>
		</footer>
	);
}
