import "../styles/SidebarRow.css";
import React from "react";
import { Avatar } from "@mui/material";

function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div>
      <img src={image} className="video__thumbnail" />
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channel} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
