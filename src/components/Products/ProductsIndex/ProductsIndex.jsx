// libs
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

// utils
import { getListOfProducts } from '../utils/index';

// components
import ProductCard from './ProductCard';

// styles
import styles from './styles.module.scss';

const ProductsIndex = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  }, [state]);

  useEffect(() => {
    (async () => {
      const data = await getListOfProducts();
      const params = Object.fromEntries([...searchParams]);
      setProductsFromParams(data, params);
    })();
  }, []);

  const setProductsFromParams = (data, params) => {
    if (!Object.keys(params).length) {
      setProducts(data);
      return;
    }

    const sortedProducts = [...data].sort((a, b) => {
      const { sort, order } = params;
      switch (order) {
        case 'ascending': {
          return a[sort] > b[sort] ? 1 : -1;
        }
        case 'descending': {
          return a[sort] < b[sort] ? 1 : -1;
        }
        default: {
          return 0;
        }
      }
    });

    setProducts(sortedProducts);
  };

  const updateParams = event => {
    const { name, value } = event.target;
    const currentParams = Object.fromEntries([...searchParams]);
    const newParams = { ...currentParams, [name]: value };
    setSearchParams(newParams);
    setProductsFromParams(products, newParams);
  };

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.radioGroup}>
        <span>Sort:</span>
        <label htmlFor=''>
          Name
          <input
            type='radio'
            name='sort'
            value='name'
            onChange={updateParams}
            defaultChecked={searchParams.get('sort') === 'name'}
          />
        </label>
        <label htmlFor=''>
          Price
          <input
            type='radio'
            name='sort'
            value='price'
            onChange={updateParams}
            defaultChecked={searchParams.get('sort') === 'price'}
          />
        </label>
      </div>
      <div className={styles.radioGroup}>
        <span>Order:</span>
        <label htmlFor=''>
          Ascending
          <input
            type='radio'
            name='order'
            value='ascending'
            onChange={updateParams}
            defaultChecked={searchParams.get('order') === 'ascending'}
          />
        </label>
        <label htmlFor=''>
          Descending
          <input
            type='radio'
            name='order'
            value='descending'
            onChange={updateParams}
            defaultChecked={searchParams.get('order') === 'descending'}
          />
        </label>
      </div>
      <ul className={styles.productsList}>
        {products.map(item => (
          <ProductCard
            product={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsIndex;
