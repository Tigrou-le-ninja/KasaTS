import React from 'react';

// Routes
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//Pages templates
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import DetailsPage from '../pages/details';
import ErrorPage from '../pages/error';

//Layouts
import Header from '../layouts/header';
import Main from '../layouts/main';
import Footer from '../layouts/footer';

function StaticLayout () {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}

const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<StaticLayout/>}>
				<Route index element={<StaticLayout/>} />
				<Route path="About" element={<AboutPage/>} />
				<Route path="Details/:id" element={<DetailsPage/>} />
				<Route path="*" element={<ErrorPage/>} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default AppRouter