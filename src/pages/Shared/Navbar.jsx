import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const nav = (
    <>
      <li className="font-bold"><NavLink to="/">Home</NavLink></li>
      <li className="font-bold"><NavLink to="/allCard">All Card</NavLink></li>
      <li className="font-bold"><NavLink to="/map">Map</NavLink></li>
      <li className="font-bold"><NavLink to="/about">About</NavLink></li>
    </>
  );

  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {nav}
          </ul>
        </div>
        <Link className="md:text-2xl ml-4" to="/">Unice Craft</Link>
      </div>
      <div className="navbar-end gap-4">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
        <Link onClick={toggleTheme} className="btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Link>
        <Link className="btn" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
