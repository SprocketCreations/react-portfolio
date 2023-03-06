import React from "react";
import "./style.css";

import avatar from "../../images/avatar.png";

export default function PageAbout() {
	return (
		<main className="page page-about">
			<article>
				<img src={avatar} alt="Drawing of a Kerbal aircraft marshaller from Kerbal Space Program" />
				<p>Kailen James is a software developer set on making websites that change the way user interact with the internet. A huge fan of React and Node, he is capable of building user friendly webapps that meet any number of criteria.</p>
				<p>He is largely self taught, but did study at a twelve week fullstack bootcamp hosted by the University of Washington.</p>
			</article>
		</main>
	);
}