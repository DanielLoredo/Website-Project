import React from "react";

import sprite from "./../img/sprite.svg";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="/" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${sprite}#icon-home`} />
              </svg>

              <span>Home</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="/" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${sprite}#icon-aircraft-take-off`} />
              </svg>

              <span>Flight</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="/" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${sprite}#icon-key`} />
              </svg>

              <span>Car Rental</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="/" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${sprite}#icon-map`} />
              </svg>

              <span>Tours</span>
            </a>
          </li>
        </ul>

        <div className="legal">&copy; 2021 by Trillo, The future is coming</div>
      </nav>
    );
  }
}

export default Sidebar;
