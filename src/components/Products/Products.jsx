// libs
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// components
import ProductsIndex from './ProductsIndex';
import Product from './Product/Product';

// styles
import styles from './styles.module.scss';

import logo from '../../assets/img/logo.png';

const Products = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src={logo}
        alt='Ultimate Burgers'
        className={styles.productImage}
      />
      {/* 1st approach */}
      {/* <Outlet /> */}

      {/* 2nd approach */}
      <Routes>
        <Route
          path='/'
          element={<ProductsIndex />}
        />
        <Route
          path='/:id'
          element={<Product />}
        />
      </Routes>
    </div>
  );
};

export default Products;
