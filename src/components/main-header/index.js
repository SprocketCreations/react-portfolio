import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @typedef MainHeaderProps The props for a MainHeader element.
 */
/**
 * The main header. Contains the nav bar and navigation buttons.
 * @param {MainHeaderProps} props The props.
 * @returns {JSX.Element}
 */
export default function MainHeader() {
	return (
		<header className="main-header">
			<nav>
				<h1>Kailen James</h1>
				<ul>
					<Link to="/">About Me</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/resume">Resume</Link>
				</ul>
			</nav>
		</header>
	);
}