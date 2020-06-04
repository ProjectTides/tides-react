import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        Tides
      </div>
      <div className={styles.Menu}>
        <div>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
