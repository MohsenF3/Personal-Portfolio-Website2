import React from "react";
import "./App.css";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Testimonial from "./pages/Testimonial/Testimonial";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
