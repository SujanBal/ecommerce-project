import React from "react";
// import data from "./data";
// import { Link } from "react-router-dom";
import "./index.css";

export default function FooterLInks() {
	// const [footerlinks] = useState(data);
	// , setfooterlinks
	return (
		<footer className="footer">
			{/* <div className="footerlinks">
				{footerlinks.map((footerlink, index) => {
					const { title, links } = footerlink;
					return (
						<div className="links-container" key={index}>
							<h3>{title}</h3>
							<ul className="links">
								{links.map((linkitem, index) => {
									const { url, link } = linkitem;
									return (
										<li key={index}>
											<Link to={url}>{link}</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div> */}
			<div className="copyright">
				Privacy Policy / This is an ecommerce website - sujanbal © 2021 / All
				Rights Reserved
			</div>
		</footer>
	);
}
