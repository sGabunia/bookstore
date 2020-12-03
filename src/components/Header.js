import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../reducers/toggleMenuReducer";

const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(({ toggleMenu }) => toggleMenu);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="company logo" className="logo" />
        </Link>

        <ul className={`nav-list ${toggle && "nav-open"}`}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/favourites">favourites</Link>
          </li>
          <li>
            <Link to="/">details</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={() => dispatch(toggleMenu())}>
          <div className={`line top ${toggle && "toggle-top-line"}`}></div>
          <div
            className={`line middle ${toggle && "toggle-middle-line"}`}
          ></div>
          <div
            className={`line bottom ${toggle && "toggle-bottom-line"}`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
