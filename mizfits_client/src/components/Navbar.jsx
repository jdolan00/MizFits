import React from "react";
import { Link } from "react-router-dom";
import {
  Bolt,
  CottageOutlined,
  FitnessCenterOutlined,
  PersonOutlineOutlined,
  InfoOutlined,
  FitbitOutlined,
} from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { desktopNavstyles, mobileNavstyles } from "../theme";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navbarItemStyle = isNonMobileScreens
    ? desktopNavstyles.navbarItem
    : mobileNavstyles.navbarItem;
  const navbarLinkStyle = isNonMobileScreens
    ? desktopNavstyles.navbarLink
    : mobileNavstyles.navbarLink;
  const iconStyle = isNonMobileScreens
    ? desktopNavstyles.icon
    : mobileNavstyles.icon;

  return (
    <nav
      style={
        isNonMobileScreens ? desktopNavstyles.navbar : mobileNavstyles.navbar
      }
    >
      <div style={navbarLinkStyle}>
        <Bolt style={iconStyle} />
        <Typography>Mizfits</Typography>
      </div>
      <ul style={isNonMobileScreens ? desktopNavstyles.navbarList : mobileNavstyles.navbarList}>
        <div style={navbarItemStyle}>
          <Link to="/" style={navbarLinkStyle}>
            <CottageOutlined style={iconStyle} />
          </Link>
        </div>
        <div style={navbarItemStyle}>
          <Link to="/track" style={navbarLinkStyle}>
            <FitbitOutlined style={iconStyle} />
          </Link>
        </div>
        <div style={navbarItemStyle}>
          <Link to="/login" style={navbarLinkStyle}>
            Login
          </Link>
        </div>
        <div style={navbarItemStyle}>
          <Link to="/profile" style={navbarLinkStyle}>
            <PersonOutlineOutlined style={iconStyle} />
          </Link>
        </div>
        <div style={navbarItemStyle}>
          <Link to="/workout" style={navbarLinkStyle}>
            <FitnessCenterOutlined style={iconStyle} />
          </Link>
        </div>
        <div style={navbarItemStyle}>
          <Link to="/workouts" style={navbarLinkStyle}>
            <FitnessCenterOutlined style={iconStyle} />
          </Link>
        </div>
      </ul>
      <div style={navbarItemStyle}>
        <Link to="/about" style={navbarLinkStyle}>
          <InfoOutlined style={iconStyle} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;