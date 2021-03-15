import React from "react";
import "./index.css";

export default function Map() {
	useEffect(() => {
		document.querySelector("#searchref").value = null;
	}, []);
	return (
		<section className="map">
			<h1>here is map</h1>
		</section>
	);
}
