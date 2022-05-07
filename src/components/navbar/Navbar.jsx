import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo-transparant.png";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="tcm-logo" />

          <Link to='/' className="link">
            <span>Homepage</span>
          </Link>
          <Link to={"/series"} className="link">
            <span>Series</span>
          </Link>
          <Link to={"/movies"} className="link">
            <span>Movies</span>
          </Link>
          <span>Classics</span>
          <span>My Collection</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KIDS</span>
          <Notifications className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Hitchcock%2C_Alfred_02.jpg"
            alt="profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
