import React from "react";
import GetQuoteCard from "../GetQuoteCard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div>
        <GetQuoteCard />
      </div>
    </>
  );
};

export default Home;
