import React from "react";

import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    /* stack is a 1 dimensional grid */
    <div
      style={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        display: "flex",
        zIndex: "20",
        paddingBottom: "10px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <img src={logo} alt="logo" height={45}></img>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
