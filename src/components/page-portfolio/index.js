import React from "react";
import "./style.css";

import { ProjectCard } from "../";

/** @type {ProjectCardProps[]} */
const projects = [
	{
		id: 1,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	}, {
		id: 2,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	}, {
		id: 3,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	}, {
		id: 4,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	}, {
		id: 5,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	}, {
		id: 6,
		image: "",
		alt: "",
		name: "",
		deployedURI: "",
		repoURI: "",
	},
];

export default function PagePortfolio() {
	return (
		<main className="page-portfolio">
			<h2>Projects</h2>
			<section>
				{projects.map(({ id, image, alt, name, deployedURI, repoURI }) =>
					<ProjectCard key={id}
						image={image}
						alt={alt}
						name={name}
						deployedURI={deployedURI}
						repoURI={repoURI} />)}
			</section>
		</main>
	);
}