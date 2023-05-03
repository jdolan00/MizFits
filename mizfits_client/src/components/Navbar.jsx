import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bolt,
  CottageOutlined,
  FitnessCenterOutlined,
  PersonOutlineOutlined,
  InfoOutlined,
  FormatListBulleted,
  Edit,
} from "@mui/icons-material";
import { Typography, useMediaQuery, Button } from "@mui/material";
import { desktopNavstyles, mobileNavstyles } from "../theme";
import GroupIcon from '@mui/icons-material/Group';


const Navbar = ({ isLoggedIn, onLogin }) => {
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


  // Check for token to deliver different Navbar depending on login status
  const token = localStorage.getItem('token');

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogin(false);
    navigate('/');
  };
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
        {token ? (
          <>
            <div style={navbarItemStyle}>
              <Link to="/" style={navbarLinkStyle}>
                <CottageOutlined style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/track" style={navbarLinkStyle}>
                <Edit style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Button onClick={handleLogout} style={navbarLinkStyle}>
                Logout
              </Button>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/profile" style={navbarLinkStyle}>
                <PersonOutlineOutlined style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/feed" style={navbarLinkStyle}>
                <GroupIcon style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/workout" style={navbarLinkStyle}>
                <FitnessCenterOutlined style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/workouts" style={navbarLinkStyle}>
                <FormatListBulleted style={iconStyle} />
              </Link>
            </div>
            <div style={navbarItemStyle}>
              <Link to="/about" style={navbarLinkStyle}>
                <InfoOutlined style={iconStyle} />
              </Link>
            </div>

          </>
        ) : (
          <>
            <div style={navbarItemStyle}>
              <Link to="/" style={navbarLinkStyle}>
                <CottageOutlined style={iconStyle} />
              </Link>
            </div>

            <div style={navbarItemStyle}>
              <Link to="/login" style={navbarLinkStyle}>
                Login
              </Link>
            </div>

            <div style={navbarItemStyle}>
              <Link to="/about" style={navbarLinkStyle}>
                <InfoOutlined style={iconStyle} />
              </Link>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;