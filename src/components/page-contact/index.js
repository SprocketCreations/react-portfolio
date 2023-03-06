import React, { useState } from "react";
import "./style.css";



/**
 * @returns {JSX.Element}
 */
export default function PageContact() {

	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactMessage, setContactMessage] = useState("");

	const isContactName = () => contactName !== "";
	const isContactEmail = () => contactEmail !== "";
	const isContactEmailValid = () => /^[\w\.-]+@([\w-]+\.)+[\w-]{2,8}$/g.test(contactEmail);
	const isContactMessage = () => contactMessage !== "";

	const [hasName, setHasName] = useState(true);
	const [hasEmail, setHasEmail] = useState(true);
	const [emailIsValid, setEmailIsValid] = useState(true);
	const [hasMessage, setHasMessage] = useState(true);

	const [contactSent, setContactSent] = useState(false);

	const verifyContactName = () => {
		const hasName = isContactName();
		setHasName(hasName);
		return hasName;
	};
	const verifyContactEmail = () => {
		const hasEmail = isContactEmail();
		const emailIsValid = isContactEmailValid();
		setHasEmail(hasEmail);
		setEmailIsValid(emailIsValid);
		return hasEmail && emailIsValid;
	};
	const verifyContactMessage = () => {
		const hasMessage = isContactMessage();
		setHasMessage(hasMessage);
		return hasMessage;
	};

	/** @param {SubmitEvent} event */
	const submit = async event => {
		event.preventDefault();

		//These are on seperate lines to prevent short circuiting.
		const a = verifyContactName();
		const b = verifyContactEmail();
		const c = verifyContactMessage();

		if (a && b && c) {
			setContactSent(true);

			setTimeout(() => setContactSent(false), 4000);

			setContactName("");
			setContactEmail("");
			setContactMessage("");
		}
	};
	return (
		<main className="page page-contact">
			<section>
				<h2>Send me a message 👇</h2>

				<form onSubmit={submit}>
					<label htmlFor="contact-name">
						<span>Name</span>
						{hasName || <span>Required</span>}
					</label>
					<input type="text" id="contact-name" value={contactName} onBlur={verifyContactName} onChange={event => setContactName(event.target.value)} />

					<label htmlFor="contact-email">
						<span>Email</span>
						{hasEmail && (emailIsValid || <span>Invalid</span>)}
						{hasEmail || <span>Required</span>}
					</label>
					<input type="email" id="contact-email" value={contactEmail} onBlur={verifyContactEmail} onChange={event => setContactEmail(event.target.value)} />

					<label htmlFor="contact-message">
						<span>Message</span>
						{hasMessage || <span>Required</span>}
					</label>
					<textarea name="message" id="contact-message" cols="30" rows="10" onBlur={verifyContactMessage}
						value={contactMessage} onChange={event => setContactMessage(event.target.value)}></textarea>

					<span>
						<button action="submit">Send</button>
						{contactSent && <p>Your message has been sent.</p>}
					</span>
				</form>
			</section>
		</main>
	);
}