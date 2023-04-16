import React, { useState } from "react";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar-component-container">
      {categories.map((el) => {
        return (
          <button
            key={el.name}
            className="category-btn"
            style={{
              backgroundColor:
                el.name === selectedCategory ? "red" : "transparent",
              color: el.name !== selectedCategory ? "white" : "black",
            }}
            onClick={() => setSelectedCategory(el.name)}
          >
            <span
              style={{
                color: el.name !== selectedCategory ? "red" : "white",
                marginRight: "10px",
              }}
            >
              {el.icon}
            </span>
            <span
              style={{
                opacity: el.name !== selectedCategory ? "0.8" : "1",
              }}
            >
              {el.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
