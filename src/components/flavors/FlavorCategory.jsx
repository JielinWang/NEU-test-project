import React from "react";
import GetQuoteCard from "../GetQuoteCard";
import { useParams } from "react-router-dom";
import flavorsData from "../../utils/flavorsData";

const FlavorCategory = () => {
  const { category } = useParams();

  // Filter flavorsData based on the selected category
  const flavorsInCategory = flavorsData.filter(
    (flavor) => flavor[1] === category
  );

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <h1>{category}</h1>
          <ul>
            {flavorsInCategory.map((flavor) => (
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
