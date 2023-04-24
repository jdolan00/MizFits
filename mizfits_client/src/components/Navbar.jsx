import React from "react";
import { Link } from "react-router-dom";
import { Bolt } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.iconContainer}>
        <Bolt style={styles.icon} />
      </div>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <Link to="/" style={styles.navbarLink}>
            Home
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/login" style={styles.navbarLink}>
            Login
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/profile" style={styles.navbarLink}>
            Profile
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/workout" style={styles.navbarLink}>
            Workout
          </Link>
        </li>
      </ul>
      <div style={styles.bottomLink}>
        <Link to="/about" style={styles.bottomLinkText}>
          About
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#FEDD69",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10px 20px",
    zIndex: 999,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "60px",
  },
  icon: {
    color: "black",
    fontSize: "60px",
  },
  navbarList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    margin: "20px 0",
  },
  navbarLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  bottomLink: {
    position: "absolute",
    bottom: "10%",
    left: "20px",
  },
  bottomLinkText: {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default Navbar;
