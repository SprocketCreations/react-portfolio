import React from "react";
import "./style.css";

/**
 * @typedef ProjectCardProps The props for a ProjectCard element.
 * @property {number} key The unique key to keep react quiet.
 * @property {*} image The image to display for this project.
 * @property {string} alt The alt text for this project's image.
 * @property {string} name The display name of this project.
 * @property {string} deployedURI The uri of the deployed application.
 * @property {string} repoURI The uri of the application's repository.
 */
/**
 * A project card for display on the portfolio page.
 * @param {ProjectCardProps} props
 * @returns {JSX.Element}
 */
export default function ProjectCard({ key, image, alt, name, deployedURI, repoURI }) {
	const style = {
		article: {
			backgroundImage: `url(${image})`,
		}
	}
	return (
		<a href={deployedURI} target="_blank" className="project-card" style={style.article} key={key}>
			<article>
				<h2>{name}</h2>
				{repoURI && <a href={repoURI} target="_blank">Repository</a>}
			</article>
		</a>
	);
}