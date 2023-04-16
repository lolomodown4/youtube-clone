import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  /* verifying the data */
  /* console.log(videos); */
  return (
    <div
      style={{
        display: direction || "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        height: "95vh",
      }}
    >
      {console.log(videos)}
      {videos &&
        videos.map((el, index) => {
          return (
            <div key={index}>
              {el.id.videoId && <VideoCard video={el} />}
              {el.id.channelId && <ChannelCard channelDetail={el} />}
            </div>
          );
        })}
    </div>
  );
};

export default Videos;
