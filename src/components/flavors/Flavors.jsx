import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetQuoteCard from "../GetQuoteCard";

const Flavors = () => {
  const [flavorCategories, setFlavorCategories] = useState([]);

  // get data fetch from flavors.json file located at public dir
  useEffect(() => {
    fetch("/flavors.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item[1]))];
        setFlavorCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching flavor categories:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row align-items-start my-5">
        <div className="col-lg-9">
          <h1 className="font-weight-light">Flavors</h1>
          <div className="d-flex flex-wrap">
            {/* Flavors categories list cards */}
            {flavorCategories.map((category, index) => (
              <div className="col-lg-3 col-6  p-2" key={index}>
                <Link
                  className="text-decoration-none"
                  to={`/flavors/${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="card text-center">
                    <img
                      src="../../../img/flavors.jpg"
                      alt={category}
                      height="100"
                      width="150"
                      className="mx-auto"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Get quote card on the right side */}
        <div className="col-lg-3 align-self-start">
          <GetQuoteCard />
        </div>
      </div>
    </div>
  );
};

export default Flavors;
