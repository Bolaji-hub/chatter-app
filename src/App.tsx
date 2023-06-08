import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/sign-up" Component={SignUp} />
      <Route path="/log-in" Component={LogIn} />
    </Routes>
  );
};

export default App;
