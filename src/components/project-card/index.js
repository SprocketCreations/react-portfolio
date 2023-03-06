import React from "react";
import "./style.css";

/**
 * @typedef ProjectCardProps The props for a ProjectCard element.
 * @property {*} image The image to display for this project.
 * @property {string} name The display name of this project.
 * @property {string} deployedURI The uri of the deployed application.
 * @property {string} repoURI The uri of the application's repository.
 */
/**
 * A project card for display on the portfolio page.
 * @param {ProjectCardProps} props
 * @returns {JSX.Element}
 */
export default function ProjectCard({ image,  name, deployedURI, repoURI }) {
	const style = {
		article: {
			backgroundImage: `url(${image})`,
		}
	}
	return (
		<a href={deployedURI} target="_blank" className="project-card" style={style.article}>
			<article>
				<h2>{name}</h2>
				{repoURI && <a href={repoURI} target="_blank">Repository</a>}
			</article>
		</a>
	);
}