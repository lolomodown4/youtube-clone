import React from "react";
import { Link } from "react-router-dom";
import { Block, CheckCircle } from "@mui/icons-material";
import { Card, CardMedia } from "@mui/material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  /* to see the video data */
  /*  console.log(video) */
  return (
    <div
      className="card-container"
      style={{ backgroundColor: "#1e1e1e", padding: "5px" }}
    >
      <Link
        to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
      >
        <div>
          <img
            src={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            height="220px"
            width="358px"
            alt="thumbnail"
          />
        </div>
      </Link>

      <div
        style={{
          backgroundColor: "#1e1e1e",
          height: "160px",
          marginTop: "10px",
          margin: "10px",
        }}
      >
        <Link
          to={
            video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl
          }
          style={{ display: "block" }}
        >
          <span style={{ color: "white", fontSize: "larger" }}>
            {video?.snippet?.title.slice(0, 40) || demoVideoTitle}
          </span>
        </Link>
        <Link
          to={
            video?.snippet?.channelId
              ? `/channel/${video?.snippet?.channelId}`
              : demoChannelUrl
          }
          style={{ display: "block", marginTop: "5px" }}
        >
          <span style={{ color: "gray" }}>
            {video?.snippet?.channelTitle || demoChannelTitle}
          </span>
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
