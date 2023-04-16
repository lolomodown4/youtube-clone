import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTopVar }) => {
  return (
    <div>
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail.id}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "358px",
            height: "380px",
            marginRight: "10px",
            marginTop: marginTopVar,
          }}
        >
          <img
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt="logo."
            style={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
            }}
          />
          <span
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <h3>
              {channelDetail?.snippet?.channelTitle ||
                channelDetail?.brandingSettings?.channel?.title}
            </h3>
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </span>
          {channelDetail.statistics ? (
            <h4
              style={{
                color: "gray",
                marginBlockStart: "0",
                marginBlockEnd: "0",
              }}
            >
              {channelDetail.statistics.subscriberCount} Subscribers
            </h4>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
