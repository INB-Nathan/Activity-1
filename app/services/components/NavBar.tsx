import React from 'react';
import Styles from './NavBar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={Styles.navBar}>
      <div className={Styles.navBarContainer}>
        <Link href="/" className={Styles.navBarLogo}>
          Company
        </Link>
        <ul className={Styles.navMenu}>
          <li className={Styles.navItem}>
            <Link href="/" className={Styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link href="/about" className={Styles.navLinks}>
              About
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link href="/services" className={Styles.navLinks}>
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
