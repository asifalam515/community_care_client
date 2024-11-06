import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut, userInfo } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log("navbar user is", user);
  const handleLogOutBtn = () => {
    logOut()
      .then(() => {
        // logout done
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        //
        navigate("/");
      })
      .catch((error) => {
        // An error happened.

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { error },
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/needVolunteer">Need Volunteer</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      <li>
        {user && (
          <div className="navbar-end flex gap-10 mx-2">
            <div className="relative group">
              <button id="dropdownDelayButton" className="">
                <img
                  className="w-20 h-10 rounded-lg"
                  src={userInfo?.photo}
                  alt="User Profile"
                />
              </button>

              <div className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-1/2 transform -translate-x-1/2 mt-2">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <span className="block px-4 py-2 font-semibold">
                      {userInfo?.name}
                    </span>
                  </li>
                  {user && (
                    <li>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleLogOutBtn}
                      >
                        Logout
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">Community Care</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* --------------------------------------- */}

      {/* ---------------------test_------------- */}
    </div>
  );
};

export default Navbar;
