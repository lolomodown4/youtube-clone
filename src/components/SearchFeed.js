import React from "react";
import { useState, useEffect } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}`
      );
      setVideos(response?.items);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="SearchFeed" style={{ marginTop: "10px" }}>
      <div style={{ height: "90vh", overflowY: "auto" }}>
        <h1 style={{ color: "white", marginLeft: "30px" }}>
          Search Results for :
          <span style={{ color: "red" }}> {`${searchTerm}`}</span>
        </h1>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
