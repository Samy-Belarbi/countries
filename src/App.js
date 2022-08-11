import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/initiation-react/" element={<Home />} />
        <Route path="/initiation-react/about" element={<About />} />
        <Route path="/initiation-react/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
