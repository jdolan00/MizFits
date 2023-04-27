import React from "react";
import { Link } from "react-router-dom";
import {
  Bolt,
  CottageOutlined,
  FitnessCenterOutlined,
  PersonOutlineOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Navstyles } from "../theme";

const Navbar = () => {
  return (
    <nav style={Navstyles.navbar}>
      <div style={Navstyles.navbarLink}>
        <Bolt style={Navstyles.icon} />
        <Typography>Mizfits</Typography>
      </div>
      <ul style={{ ...Navstyles.navbarList }}>
        <div style={Navstyles.navbarItem}>
          <Link to="/" style={Navstyles.navbarLink}>
            <CottageOutlined style={Navstyles.icon} />
          </Link>
        </div>
        <div style={Navstyles.navbarItem}>
          <Link to="/login" style={Navstyles.navbarLink}>
            Login
          </Link>
        </div>
        <div style={Navstyles.navbarItem}>
          <Link to="/profile" style={Navstyles.navbarLink}>
            <PersonOutlineOutlined style={Navstyles.icon} />
          </Link>
        </div>
        <div style={Navstyles.navbarItem}>
          <Link to="/workout" style={Navstyles.navbarLink}>
            <FitnessCenterOutlined style={Navstyles.icon} />
          </Link>
        </div>
      </ul>
      <div style={Navstyles.navbarItem}>
        <Link to="/about" style={Navstyles.navbarLink}>
          <InfoOutlined style={Navstyles.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
