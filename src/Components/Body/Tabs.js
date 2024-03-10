import React, { useState } from "react";
import "./Tabs.css";

const Tab = () => {
    const openCity = (evt, cityName) => {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    };

  return (
    <div className="tab-container">
      <div className="tab">
        <button className="tablinks" onClick={(e) => openCity(e, "London")}>
          London
        </button>
        <button className="tablinks" onClick={(e) => openCity(e, "Paris")}>
          Paris
        </button>
      </div>
    </div>
  );
};

export default Tab;
