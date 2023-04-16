import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";

import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(response.items);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="feed" style={{ marginTop: "10px" }}>
      <div
        style={{
          borderRight: "1px solid #3d3d3d",
        }}
        className="sidebar-container"
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div style={{ marginTop: "10px" }}>
          <span style={{ color: "white" }}>Copyright 2023 EmmanYT</span>
        </div>
      </div>

      <div style={{ height: "90vh", overflowY: "auto" }}>
        <h1 style={{ color: "white", marginLeft: "30px" }}>
          {`${selectedCategory}`} <span style={{ color: "red" }}>Videos</span>
        </h1>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
