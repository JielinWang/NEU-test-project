import React from "react";
import { Link } from "react-router-dom";
import GetQuoteCard from "../GetQuoteCard";

const Flavors = () => {
  return (
    <div className="home">
      <div class="container">
        <Link to="/flavors/category">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <h1 class="font-weight-light">Flavors</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div class="col-lg-5">
              <GetQuoteCard />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Flavors;
