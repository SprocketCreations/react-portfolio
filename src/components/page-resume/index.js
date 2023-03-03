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
		<main className="page-resume">
			<article>
				<h2>Resume</h2>
				<a href="http://">Download</a>
			</article>
			<article>
				<h3>Skills</h3>
				<ol>
					{proficiencies.map(skill => <li>{skill}</li>)}
				</ol>
			</article>
		</main>
	);
}