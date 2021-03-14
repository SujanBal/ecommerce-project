import React, { useState } from "react";
import { data } from "./data";

export default function About() {
	const [datas] = useState(data);
	// , setdata
	return (
		<section className="about">
			{datas.map((d) => {
				const { id, image, name, title } = d;
				return (
					<div className="about-items" key={id}>
						<img src={image} alt={name} />
						<h4>{name}</h4>
						<h4>{title}</h4>
					</div>
				);
			})}
		</section>
	);
}
