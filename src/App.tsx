import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Confirm from "./pages/Confirm";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/sign-up" Component={SignUp} />
      <Route path="/log-in" Component={LogIn} />
      <Route path="/confirm-password" Component={Confirm} />
      <Route path="/feed-back" Component={Feed} />
    </Routes>
  );
};

export default App;
