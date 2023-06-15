import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetQuoteCard from "../GetQuoteCard";

const Flavors = () => {
  const [flavorCategories, setFlavorCategories] = useState([]);

  useEffect(() => {
    // Fetch flavor categories from flavors.json
    fetch("/flavors.json")
      .then((response) => response.json())
      .then((data) => {
        const categories = [...new Set(data.map((flavor) => flavor[1]))];
        setFlavorCategories(categories);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <h1 className="font-weight-light">Flavors</h1>
          <ul>
            {flavorCategories.map((category) => {
              const categorySlug = category.toLowerCase().replace(/\s/g, "-");
              return (
                <li key={category}>
                  <Link to={`/flavors/${categorySlug}`}>{category}</Link>
                </li>
              );
            })}
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
