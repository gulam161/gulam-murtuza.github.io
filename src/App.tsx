import React from "react";
// import { Routes, Route } from "react-router-dom";
import Header from "@/component/Navigation/Header";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Portfolio from "@/component/Portfolio";
import Contact from "./component/Contact";
import { Box } from "@mui/material";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Box className="dark:bg-dark-body-bg dark:text-white">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
    </Box>
  );
};
export default App;
