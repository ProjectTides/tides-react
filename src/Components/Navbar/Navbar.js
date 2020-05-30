import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Logo}>
        Tides
      </div>
      <div className={styles.Menu}>
        <div>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
