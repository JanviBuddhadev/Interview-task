import React from "react";
import IsuLogo from "../../Images/ISULogo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IsuImageSkating from "../../Images/IsuImageSkating.png";

function Header() {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const dropdownOptions = ["Event 1", "Event 2", "Event 3"];
  const toggleDropdown = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img
            className="header-logo"
            src={IsuLogo}
            alt="International Skating Union"
          />
          <div className="header-title">
            <p>
              INTERNATIONAL <br /> SKATING UNION
            </p>
          </div>
        </div>
        <div className="header-navigation">
          <a className="header-nav-item" href="#">
            NEWS
          </a>
          <a className="header-nav-item" href="#">
            RESULTS
          </a>
          <a className="header-nav-item" href="#">
            EVENTS{" "}
            <FontAwesomeIcon icon={faCaretDown} onClick={toggleDropdown} />
            <div
              className={`dropdown-content ${isEventsOpen ? "show" : "hide"}`}
            >
              {dropdownOptions.map((option, index) => (
                <a href="#" className="dropdown-item">
                  {option}
                </a>
              ))}
            </div>
          </a>
          <a className="header-nav-item" href="#">
            ATHLETES
          </a>
          <a className="header-nav-item" href="#">
            MEDIA
          </a>
        </div>
        <div className="header-right">
          <a className="header-nav-item" href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a className="header-nav-item" href="#">
            <FontAwesomeIcon icon={faUser} />
          </a>

          <a
            className="header-nav-item"
            href="#"
          >
            <img
            className="header-logo"
            src={IsuLogo}
            alt="International Skating Union"
          />
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
