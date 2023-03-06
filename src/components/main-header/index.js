import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const routes = [
	{
		route: "/",
		render: "About Me"
	}, {
		route: "/portfolio",
		render: "Portfolio"
	}, {
		route: "/contact",
		render: "Contact"
	}, {
		route: "/resume",
		render: "Resume"
	}
]

/**
 * @typedef MainHeaderProps The props for a MainHeader element.
 */
/**
 * The main header. Contains the nav bar and navigation buttons.
 * @param {MainHeaderProps} props The props.
 * @returns {JSX.Element}
 */
export default function MainHeader() {
	const {pathname: location} = useLocation();

	return (
		<header className="main-header">
			<nav>
				<h1>Kailen James</h1>
				<ul>
					{routes.map(({route, render}, i) => <li key={i}><Link className={location == route? "active-tab": ""} to={route}>{render}</Link></li>)}
				</ul >
			</nav >
		</header >
	);
}