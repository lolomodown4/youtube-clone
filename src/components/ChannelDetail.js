import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(
    "UCmXmlB4-HJytD7wek0Uo97A"
  );
  const [videosOnChannel, setVideosOnChannel] = useState([]);

  /* para makuha yung params sa link */
  const { id } = useParams();

  /* fetching data from */
  useEffect(() => {
    const fetchChannelData = async () => {
      const response = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(response.items[0]);
    };

    const fetchVideosInChannel = async () => {
      const response = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideosOnChannel(response.items);
    };

    fetchChannelData();
    fetchVideosInChannel();
  }, [id]);

  /* to see the channelDetail data */
  /* console.log(id); */
  /* console.log(channelDetail); */
  /* console.log(videosOnChannel); */

  return (
    <div style={{ minHeight: "95vh", marginTop: "10px" }}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          height: "300px",
          zIndex: "10",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* {console.log(channelDetail)} */}
        <ChannelCard
          channelDetail={channelDetail}
          marginTopVar="-150px"
        ></ChannelCard>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        {videosOnChannel.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};

export default ChannelDetail;
