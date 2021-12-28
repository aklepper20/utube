import React from "react";
import "../styles/SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channel=""
        verified
        subs=""
        noOfVideos=""
        description=""
      />
      <hr />
      <VideoRow
        views=""
        subs=""
        description=""
        timestamp=""
        channel=""
        title=""
        image=""
      />
    </div>
  );
}

export default SearchPage;
