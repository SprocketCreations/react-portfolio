import React, { useEffect, useRef, useState } from "react";
import "./style.css";

/**@type {function(): string} */
let getContactName;
/**@type {function(): string} */
let getContactEmail;
/**@type {function(): string} */
let getContactMessage;

/**
 * This is a singleton. Do not use it more than once at any given time as it relies on global state.
 * @returns {JSX.Element}
 */
export default function PageContact() {
	const contactNameRef = useRef(null);
	const contactEmailRef = useRef(null);
	const contactMessageRef = useRef(null);

	const [contactName, setContactName] = useState("");
	getContactName = () => contactName;
	const [contactEmail, setContactEmail] = useState("");
	getContactEmail = () => contactEmail;
	const [contactMessage, setContactMessage] = useState("");
	getContactMessage = () => contactMessage;

	const [hasName, setHasName] = useState(true);
	const [hasEmail, setHasEmail] = useState(true);
	const [hasMessage, setHasMessage] = useState(true);

	useEffect(() => {
		const contactNameElement = contactNameRef.current;
		/** @param {Event} event */
		const onNameChange = event => setHasName(getContactName() !== "");
		contactNameElement.addEventListener("change", onNameChange);
		return () => { contactNameElement.removeEventListener("change", onNameChange) };
	}, []);

	useEffect(() => {
		const contactEmailElement = contactEmailRef.current;
		/** @param {Event} event */
		const onEmailChange = event => setHasEmail(getContactEmail() !== "");
		contactEmailElement.addEventListener("change", onEmailChange);
		return () => { contactEmailElement.removeEventListener("change", onEmailChange) };
	}, []);

	useEffect(() => {
		const contactMessageElement = contactMessageRef.current;
		/** @param {Event} event */
		const onMessageChange = event => setHasMessage(getContactMessage() !== "");
		contactMessageElement.addEventListener("change", onMessageChange);
		return () => { contactMessageElement.removeEventListener("change", onMessageChange) };
	}, []);

	/** @param {SubmitEvent} event */
	const submit = event => {
		event.preventDefault();

		setContactName("");
		setContactEmail("");
		setContactMessage("");
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
					<input ref={contactNameRef} type="text" id="contact-name" value={contactName} onChange={event => setContactName(event.target.value)} />

					<span>
						<label htmlFor="contact-email">Email</label>
						{hasEmail || <span>Required</span>}
					</span>
					<input ref={contactEmailRef} type="email" id="contact-email" value={contactEmail} onChange={event => setContactEmail(event.target.value)} />

					<span>
						<label htmlFor="contact-message">Message</label>
						{hasMessage || <span>Required</span>}
					</span>
					<textarea ref={contactMessageRef} name="message" id="contact-message" cols="30" rows="10"
						value={contactMessage} onChange={event => setContactMessage(event.target.value)}></textarea>

					<button action="submit">Send</button>
				</form>
			</section>
		</main>
	);
}