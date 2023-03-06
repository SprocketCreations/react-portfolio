import React from "react";
import "./style.css";

//images
import GIT_GOOD_PREVIEW from "../../images/git-good-preview.jpg";
import PERSONAL_WEBSITE_PREVIEW from "../../images/personal-website-preview.jpg";
import RENT_A_TRUCK_PREVIEW from "../../images/rent-a-truck-preview.jpg";
import TECH_BLOG_PREVIEW from "../../images/tech-blog-preview.jpg";
import NODE_TAKER_PREVIEW from "../../images/node-taker-preview.jpg";
import WEATHER_DASHBOARD_PREVIEW from "../../images/weather-dashboard-preview.jpg";

import { ProjectCard } from "../";

/** @type {ProjectCardProps[]} */
const projects = [
	{
		id: 1,
		image: RENT_A_TRUCK_PREVIEW,
		name: "Rent-a-Truck",
		deployedURI: "https://rent-a-truck.herokuapp.com/",
		repoURI: "https://github.com/SprocketCreations/truck-rental",
	}, {
		id: 2,
		image: GIT_GOOD_PREVIEW,
		name: "Git Good",
		deployedURI: "https://sprocketcreations.github.io/git-good/arena/",
		repoURI: "https://github.com/SprocketCreations/git-good",
	}, {
		id: 3,
		image: PERSONAL_WEBSITE_PREVIEW,
		name: "Personal Website",
		deployedURI: "https://www.parallaxarchive.com/portfolio",
		repoURI: undefined,
	}, {
		id: 4,
		image: NODE_TAKER_PREVIEW,
		name: "Node Taker",
		deployedURI: "https://nodetaker.herokuapp.com/",
		repoURI: "https://github.com/SprocketCreations/node-taker",
	}, {
		id: 5,
		image: TECH_BLOG_PREVIEW,
		name: "Tech Blog",
		deployedURI: "https://edx-tech-blog.herokuapp.com/",
		repoURI: "https://github.com/SprocketCreations/tech-blog",
	}, {
		id: 6,
		image: WEATHER_DASHBOARD_PREVIEW,
		name: "Weather Dashboard",
		deployedURI: "https://sprocketcreations.github.io/weather-dashboard/",
		repoURI: "https://github.com/SprocketCreations/weather-dashboard",
	},
];

export default function PagePortfolio() {
	return (
		<main className="page page-portfolio">
			<section>
				{projects.map(({ id, image, name, deployedURI, repoURI }) =>
					<ProjectCard key={id}
						image={image}
						name={name}
						deployedURI={deployedURI}
						repoURI={repoURI} />)}
			</section>
		</main>
	);
}