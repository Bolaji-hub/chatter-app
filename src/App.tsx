import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/sign-up" Component={SignUp} />
    </Routes>
  );
};

export default App;
