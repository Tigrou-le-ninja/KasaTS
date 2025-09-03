import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'

import home from './pages/home/home'
import about from './pages/about/about'
import details from './pages/details/details'
import error from './pages/error/error'

import Header from './components/header/header'
import Footer from './components/footer/footer'

function app() {
  return (
  	<BrowserRouter>
    <Header />
		<Routes>
			  <Route path="/" element={<home/>} />
				<Route path="about" element={<about/>} />
				<Route path="details/:id" element={<details/>} />
				<Route path="*" element={<error/>} />
		</Routes>
    <Footer />
	</BrowserRouter>
  )
}

export default app;