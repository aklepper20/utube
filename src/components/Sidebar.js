import "../styles/Sidebar.css";
import React from "react";
import SidebarRow from "./SidebarRow";

import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={TrendingUpIcon} />
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
