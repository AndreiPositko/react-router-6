// libs
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// components
import ProductsIndex from '../Products/ProductsIndex';
import ProductEdit from '../Products/ProductEdit';

// styles
import styles from './styles.module.scss';

const Admin = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Admin</h1>
        <Link
          to='new'
          className={styles.link}>
          New product
        </Link>
      </div>
      <Routes>
        <Route
          path='/'
          element={<ProductsIndex />}
        />
        <Route
          path='/new'
          element={<ProductEdit isEdit={false} />}
        />
        <Route
          path='/:id'
          element={<ProductEdit isEdit={true} />}
        />
      </Routes>
    </div>
  );
};

export default Admin;
