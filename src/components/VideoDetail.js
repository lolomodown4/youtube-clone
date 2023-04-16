import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import fetchFromApi from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState();

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetchFromApi(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(response.items[0]);
    };

    const fetchRelatedVideos = async () => {
      const response = await fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setRelatedVideos(response?.items);
      console.log(response);
    };

    fetchVideo();
    fetchRelatedVideos();
  }, [id]);

  /* yung minheight na lnag aayusin */
  return (
    <div style={{ minHeight: "95vh" }}>
      <div className="video-detail-comp-arrangement">
        <div
          className="react-player-container"
          style={{
            position: "relative",
            marginBottom: "10px" /* minHeight: "90vh" */,
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              p: "4px",
              marginTop: "10px",
              gap: "20px",
              position: "relative",
            }}
          >
            <div>
              <h2 style={{ marginLeft: "10px" }}>
                {videoDetail?.snippet?.title}
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", color: "gray" }}
              >
                <span>{videoDetail?.snippet?.channelTitle}</span>
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </div>

              <div style={{ color: "gray" }}>
                <span style={{ marginRight: "20px" }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </span>
                <span>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ overflowY: "auto", margin: "5px" }}>
          <h3 style={{ color: "gray", position: "sticky" }}>Related Videos:</h3>
          {relatedVideos && <Videos videos={relatedVideos} direction="block" />}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
