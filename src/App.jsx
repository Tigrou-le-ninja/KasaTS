import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Details from "./pages/details/details";
import Error from "./pages/error/error";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
