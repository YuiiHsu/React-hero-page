import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeroList from './pages/Hero/HeroList';
import HeroProfile from './pages/Hero/HeroProfile';
import Hero from 'pages/Hero';
import { path } from './routes/path';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`${path.heroes}/*`} element={<Hero />}></Route>
				<Route path="/" element={<Navigate replace to={path.heroes} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
