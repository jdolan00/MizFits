import React from "react";
import { Link } from "react-router-dom";
import {
  Bolt,
  CottageOutlined,
  FitnessCenterOutlined,
  PersonOutlineOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { desktopNavstyles, mobileNavstyles } from "../theme";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <nav
      style={
        isNonMobileScreens ? desktopNavstyles.navbar : mobileNavstyles.navbar
      }
    >
      <div
        style={
          isNonMobileScreens
            ? desktopNavstyles.navbarLink
            : desktopNavstyles.navbarLink
        }
      >
        <Bolt style={desktopNavstyles.icon} />
        <Typography>Mizfits</Typography>
      </div>
      <ul
        style={
          isNonMobileScreens
            ? desktopNavstyles.navbarList
            : mobileNavstyles.navbarList
        }
      >
        <div
          style={
            isNonMobileScreens
              ? desktopNavstyles.navbarItem
              : desktopNavstyles.navbarItem
          }
        >
          <Link
            to="/"
            style={
              isNonMobileScreens
                ? desktopNavstyles.navbarLink
                : desktopNavstyles.navbarLink
            }
          >
            <CottageOutlined
              style={
                isNonMobileScreens
                  ? desktopNavstyles.icon
                  : desktopNavstyles.icon
              }
            />
          </Link>
        </div>
        <div
          style={
            isNonMobileScreens
              ? desktopNavstyles.navbarItem
              : desktopNavstyles.navbarItem
          }
        >
          <Link
            to="/login"
            style={
              isNonMobileScreens
                ? desktopNavstyles.navbarLink
                : desktopNavstyles.navbarLink
            }
          >
            Login
          </Link>
        </div>
        <div
          style={
            isNonMobileScreens
              ? desktopNavstyles.navbarItem
              : desktopNavstyles.navbarItem
          }
        >
          <Link
            to="/profile"
            style={
              isNonMobileScreens
                ? desktopNavstyles.navbarLink
                : desktopNavstyles.navbarLink
            }
          >
            <PersonOutlineOutlined
              style={
                isNonMobileScreens
                  ? desktopNavstyles.icon
                  : desktopNavstyles.icon
              }
            />
          </Link>
        </div>
        <div
          style={
            isNonMobileScreens
              ? desktopNavstyles.navbarItem
              : desktopNavstyles.navbarItem
          }
        >
          <Link
            to="/workout"
            style={
              isNonMobileScreens
                ? desktopNavstyles.navbarLink
                : desktopNavstyles.navbarLink
            }
          >
            <FitnessCenterOutlined
              style={
                isNonMobileScreens
                  ? desktopNavstyles.icon
                  : desktopNavstyles.icon
              }
            />
          </Link>
        </div>
      </ul>
      <div
        style={
          isNonMobileScreens
            ? desktopNavstyles.navbarItem
            : desktopNavstyles.navbarItem
        }
      >
        <Link
          to="/about"
          style={
            isNonMobileScreens
              ? desktopNavstyles.navbarLink
              : desktopNavstyles.navbarLink
          }
        >
          <InfoOutlined
            style={
              isNonMobileScreens ? desktopNavstyles.icon : desktopNavstyles.icon
            }
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
