import React from "react";
import { Link } from "react-router-dom";
import { Bolt, CottageOutlined, FitnessCenterOutlined, PersonOutlineOutlined, InfoOutlined } from "@mui/icons-material";
import {Navstyles} from "../theme";

const Navbar = () => {
  return (
    <nav style={Navstyles.navbar}>
      <div style={Navstyles.iconContainer}>
        <Bolt style={Navstyles.icon} />
      </div>
      <ul style={{ ...Navstyles.navbarList, flexDirection: "column" }}>
        <li style={Navstyles.navbarItem}>
          <Link to="/" style={Navstyles.navbarLink}>
          <CottageOutlined style={Navstyles.icon} />
          </Link>
        </li>
        <li style={Navstyles.navbarItem}>
          <Link to="/login" style={Navstyles.navbarLink}>
            Login
          </Link>
        </li>
        <li style={Navstyles.navbarItem}>
          <Link to="/profile" style={Navstyles.navbarLink}>
          <PersonOutlineOutlined style={Navstyles.icon} /> 
          </Link>
        </li>
        <li style={Navstyles.navbarItem}>
          <Link to="/workout" style={Navstyles.navbarLink}>
          <FitnessCenterOutlined style={Navstyles.icon} />
          </Link>
        </li>
      </ul>
      <div style={Navstyles.bottomLink}>
        <Link to="/about" style={Navstyles.bottomLinkText}>
        <InfoOutlined style={Navstyles.icon} /> 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;