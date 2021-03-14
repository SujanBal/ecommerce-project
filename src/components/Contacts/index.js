import React from "react";
import About from "./About";
import Faq from "./Faq";
import Map from "./Map";

export default function index() {
	return (
		<section className="contacts">
			<Map />
			<About />
			<Faq />
		</section>
	);
}
