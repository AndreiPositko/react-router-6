// libs
import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.navigationWrapper}>
    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
      Products
    </NavLink>
    <NavLink to='/admin' className={({ isActive }) => (isActive ? styles.active : '')}>
      Admin
    </NavLink>
  </nav>
);

export default Navigation;
