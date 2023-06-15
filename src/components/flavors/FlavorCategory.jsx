import React, { useState, useEffect } from "react";
import GetQuoteCard from "../GetQuoteCard";
import { useParams } from "react-router-dom";

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
            flavor.categorySlug.toLowerCase() === categorySlug.toLowerCase()
        );
        setFlavorItems(categoryItems);
      })
      .catch((error) => console.error(error));
  }, [categorySlug]);

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <h1>{categorySlug} </h1>
          <ul>
            {flavorItems.map((flavor) => (
              <li key={flavor[0]}>{flavor[2]}</li>
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

export default FlavorCategory;
