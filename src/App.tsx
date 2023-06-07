import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Join from "./components/Join";
import Testimony from "./components/Testimony";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Join />
      <Testimony />
    </div>
  );
};

export default App;
