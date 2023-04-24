import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <Link to="/" style={styles.navbarLink}>Home</Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/login" style={styles.navbarLink}>Login</Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/profile" style={styles.navbarLink}>Profile</Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/workout" style={styles.navbarLink}>Workout</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 999
  },
  navbarList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navbarItem: {
    marginLeft: '20px'
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};

export default Navbar;