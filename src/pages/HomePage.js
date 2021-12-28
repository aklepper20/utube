import React from "react";
import "../styles/HomePage.css";
import Sidebar from "../components/Sidebar";
import RecommendedVideos from "../components/RecommendedVideos";

function Home() {
  return (
    <div className="homePage__pages">
      <Sidebar />
      <RecommendedVideos />
    </div>
  );
}

export default Home;
