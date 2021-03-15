import { Link } from "react-router-dom";
import "./index.css";

export default function ErrorMessage() {
	return (
		<main className="errormessage">
			<div className="homepage-link">
				<Link to="/">Go Back Home</Link>
			</div>

			<h1>No page found.</h1>
		</main>
	);
}
