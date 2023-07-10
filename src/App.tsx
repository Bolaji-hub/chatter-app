import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Confirm from "./pages/Confirm";
import Feed from "./pages/Feed";
import Analytic from "./pages/Analytic";
import PostScreen1 from "./pages/PostScreen1";
import PostScreen2 from "./pages/PostScreen2";
import PostScreen3 from "./pages/PostScreen3";
import PostScreen4 from "./pages/PostScreen4";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/sign-up" Component={SignUp} />
      <Route path="/log-in" Component={LogIn} />
      <Route path="/confirm-password" Component={Confirm} />
      <Route path="/feed-back" Component={Feed} />
      <Route path="/Analytic" Component={Analytic} />
      <Route path="post-screen1" Component={PostScreen1} />
      <Route path="post-screen2" Component={PostScreen2} />
      <Route path="post-screen3" Component={PostScreen3} />
      <Route path="post-screen4" Component={PostScreen4} />
    </Routes>
  );
};

export default App;
