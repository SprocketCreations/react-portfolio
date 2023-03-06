import React from "react";
import "./style.css";

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
				<a className="download-button" href="http://">Download</a>
			</article>
			<article>
				<h2>Skills</h2>
				<hr/>
				<ol>
					{proficiencies.map(skill => <li><h3>{skill}</h3></li>)}
				</ol>
			</article>
		</main>
	);
}