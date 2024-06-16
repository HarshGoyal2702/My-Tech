import React, { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Modal from "../components/Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";

const Navbar = () => {
  const user = useContext(AuthContext);
  console.log(user)

  const [isSticky, setSticky] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <details>
          <summary>Events</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">Technical Events</a>
            </li>
            <li>
              <a href="/menu">Cultural Events</a>
            </li>
            <li>
              <a href="/menu">Sports Events</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Schedule</summary>
          <ul className="p-2">
            <li>
              <a>28 Febuary</a>
            </li>
            <li>
              <a>29 Febuary</a>
            </li>
            <li>
              <a>
                1<sup>st</sup>March
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed left-0 right-0 top-0 transition-all duration-300 ease-in-out ">
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* this is the website LOGO  */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 h-12 object-cover">
              <img alt="" src="/images/vaish.png" />
            </div>
          </div>
          {/* this is the Website name */}
          <a style={{ fontWeight: "bold" }} className="ml-3 text-xl">
            Vaish College of Engineering
          </a>
        </div>
        {/* this is the navBar Items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* this is the search button */}
          <input
            type="text"
            placeholder="Search..."
            className={`search-box p-2 rounded-full ${
              isSearchVisible ? "block" : "hidden"
            }`}
          />
          <button
            className="btn btn-ghost btn-circle mr-3 items-center justify-center hidden lg:flex"
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {/* this is the Register Button */}
          </button>
        {
          user? <Profile user={user}/> :  <button className="btn bg-green rounded-full px-6 text-white flex items-center gap-2" onClick={()=>document.getElementById('my_modal_5').showModal()}>
            <FaRegUser />
            Register
          </button>
        }
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
