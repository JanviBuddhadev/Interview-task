import React from "react";
import "./Body.css";
import ViewMore from "../../Images/ViewMore.JPG";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="body">
      <div>
        <h1 className="body-title">
          GRAND PRIX FINAL 2023: <br /> WORLD CHAMPION
        </h1>
      </div>
      <div className="img-container">
        <img src={ViewMore} alt="View More" className="view-more-img"></img>
      </div>
      <MainContainer />
    </div>
  );
};

export default Body;
