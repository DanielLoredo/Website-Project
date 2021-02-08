import React from "react";

import logo from "./../img/logo.png";
import user from "./../img/user.jpg";
import sprite from "./../img/sprite.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Trillo logo" className="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          ></input>

          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
            </svg>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${sprite}#icon-bookmark`}></use>
            </svg>
            <span className="user-nav__notification">7</span>
          </div>

          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${sprite}#icon-chat`}></use>
            </svg>
            <span className="user-nav__notification">13</span>
          </div>

          <div className="user-nav__user">
            <img src={user} alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Daniel Loredo</span>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
