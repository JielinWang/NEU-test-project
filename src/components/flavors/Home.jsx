import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div class="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
