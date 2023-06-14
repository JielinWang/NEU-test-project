import React, { useEffect, useState } from "react";
import GetQuoteCard from "../GetQuoteCard";

const Flavors = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the data from flavors.json
    fetch("/flavors.json")
      .then((response) => response.json())
      .then((data) => {
        // Extract unique flavor categories from the data
        const uniqueCategories = [...new Set(data.map((flavor) => flavor[1]))];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <h1 className="font-weight-light">Flavors</h1>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <a href={`/flavors/${encodeURIComponent(category)}`}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-3">
          <GetQuoteCard />
        </div>
      </div>
    </div>
  );
};

export default Flavors;
