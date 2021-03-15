import React, { useState } from "react";
import { faqs } from "./data";

export default function Faq() {
	const [questions] = useState(faqs);

	return (
		<section className="faq">
			<div className="faq-questions">
				{questions.map((questionitem) => {
					const { question, answer } = questionitem;
					return (
						<SingleQuestion
							key={question.id}
							question={question}
							answer={answer}
						></SingleQuestion>
					);
				})}
			</div>
			<div className="contact-form">
				<form>
					<label type="text">Name *</label>
					<input />
					<label type="email">Email *</label>
					<input />
					<label type="textarea">Message *</label>
					<input />
					<button>Send Message</button>
				</form>
			</div>
		</section>
	);
}

const SingleQuestion = ({ question, answer }) => {
	const [isshowanswer, setisshowanswer] = useState(false);
	return (
		<div
			className="singlequestion"
			onClick={() => {
				setisshowanswer(!isshowanswer);
			}}
		>
			<h4>{question}</h4>
			{isshowanswer && <p>{answer}</p>}
			<span>{isshowanswer ? "-" : "+"}</span>
		</div>
	);
};
