import React from 'react';
import {
	MainHeader,
	MainFooter,
	
	PagePortfolio,
	PageContact,
	PageResume,
	PageAbout,
} from "./components";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<MainHeader />
			<Routes>
				<Route path="/" element={<PageAbout />} />
				<Route path="/portfolio" element={<PagePortfolio />} />
				<Route path="/contact" element={<PageContact />} />
				<Route path="/resume" element={<PageResume />} />
			</Routes>
			<MainFooter />
		</BrowserRouter>
	);
}

export default App;
