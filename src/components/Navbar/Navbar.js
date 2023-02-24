import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.rightNav}>
      <p className={styles.logo}>Bookstore CMS</p>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/books">BOOKS</Link>
          </li>
          <li>
            <Link to="/category">CATEGORY</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div><ImUser className={styles.iconNav} style={{ color: '#0290ff' }} /></div>

  </header>
);

export default Navbar;
