import React, { useState } from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="Youtube Logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <AddAlertIcon className="header__icon" />
        <Avatar src="" alt="" />
      </div>
    </div>
  );
}

export default Header;
