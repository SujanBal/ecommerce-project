import React, { useEffect } from "react";
import "./index.css";

export default function Workingon() {
	useEffect(() => {
		document.querySelector("#searchref").value = null;
	}, []);
	return (
		<main className="workingonmessage">
			<h1>Currently working on this page.</h1>
		</main>
	);
}
