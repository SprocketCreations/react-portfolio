import React, { useEffect, useRef, useState } from "react";
import "./style.css";



/**
 * @returns {JSX.Element}
 */
export default function PageContact() {

	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactMessage, setContactMessage] = useState("");

	const [hasName, setHasName] = useState(true);
	const [hasEmail, setHasEmail] = useState(true);
	const [emailIsValid, setEmailIsValid] = useState(true);
	const [hasMessage, setHasMessage] = useState(true);

	const verifyContactName = () => {
		setHasName( contactName !== "");
	};
	const verifyContactEmail = () => {
		setHasEmail(contactEmail !== "");
		setEmailIsValid(/^[\w\.-]+@([\w-]+\.)+[\w-]{2,8}$/g.test(contactEmail));
	};
	const verifyContactMessage = () => {
		setHasMessage(contactMessage !== "");
	};

	/** @param {SubmitEvent} event */
	const submit = event => {
		event.preventDefault();

		if (hasName && hasEmail && emailIsValid && hasMessage) {
			console.log("form accepted")
			setContactName("");
			setContactEmail("");
			setContactMessage("");
		}
	};
	return (
		<main className="page-contact">
			<section>
				<h2>Send me a message 👇</h2>

				<form onSubmit={submit}>
					<label htmlFor="contact-name">
						<span>Name</span>
						{hasName || <span>Required</span>}
					</label>
					<input type="text" id="contact-name" value={contactName} onBlur={verifyContactName} onChange={event => setContactName(event.target.value)} />

					<span>
						<label htmlFor="contact-email">Email</label>
						{emailIsValid || <span>Invalid</span>}
						{hasEmail || <span>Required</span>}
					</span>
					<input type="email" id="contact-email" value={contactEmail} onBlur={verifyContactEmail} onChange={event => setContactEmail(event.target.value)} />

					<span>
						<label htmlFor="contact-message">Message</label>
						{hasMessage || <span>Required</span>}
					</span>
					<textarea name="message" id="contact-message" cols="30" rows="10" onBlur={verifyContactMessage}
						value={contactMessage} onChange={event => setContactMessage(event.target.value)}></textarea>

					<button action="submit">Send</button>
				</form>
			</section>
		</main>
	);
}