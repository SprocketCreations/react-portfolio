import React from "react";
import "./style.css";

import resume from "../../files/resume.pdf";

/** @type {string[]} The skills to list on the page. */
const proficiencies = [
	"Javascript",
	"React",
	"Git",
	"mySQL",
	"C++"
];

export default function PageResume() {
	return (
		<main className="page page-resume">
			<article>
				<h2>Resume</h2>
				<a className="download-button" href={resume} download="kailen-james-resume.pdf">Download</a>
			</article>
			<article>
				<h2>Skills</h2>
				<hr/>
				<ol>
					{proficiencies.map((skill, i) => <li key={i}><h3>{skill}</h3></li>)}
				</ol>
			</article>
		</main>
	);
}