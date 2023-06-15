import React, { useState, useEffect } from "react";
import GetQuoteCard from "../GetQuoteCard";
import { useParams, Link } from "react-router-dom";

const FlavorCategory = () => {
  const { categorySlug } = useParams();
  const [flavorItems, setFlavorItems] = useState([]);

  useEffect(() => {
    // Fetch flavor items for the specific category from flavors.json
    fetch("/flavors.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryItems = data.filter(
          (flavor) =>
            flavor[1].toLowerCase().replace(/\s+/g, "-") === categorySlug // Filter based on categorySlug
        );
        setFlavorItems(categoryItems);
      })
      .catch((error) => console.error(error));
  }, [categorySlug]);

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-9">
          <h1>{categorySlug} </h1>
          {/* link back to main flavors page */}
          <Link to="/flavors">Back to Flavors</Link>
          {/* get all of the items from it's own flavor category */}
          <ul>
            {flavorItems.map((flavor) => (
              <li key={flavor[0]}>{flavor[2]}</li>
            ))}
          </ul>
        </div>
        {/* Get quote card on the right side */}
        <div className="col-lg-3 ">
          <GetQuoteCard />
        </div>
      </div>
    </div>
  );
};

export default FlavorCategory;
