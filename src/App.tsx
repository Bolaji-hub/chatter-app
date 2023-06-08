import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Join from "./components/Join";
import Testimony from "./components/Testimony";
import Started from "./components/Started";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Join />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default App;
