// libs
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// helpers
import { retrieveProduct } from '../utils';

// styles
import styles from './styles.module.scss';

import img from '../../../assets/img/products/spice-dog.png';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const product = await retrieveProduct(id);
        setProduct(product);
      } catch (e) {
        console.warn(e);
        navigate('/', { replase: true, state: { id } });
      }
    })();
  }, [id]);

  if (product === null) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <img
          src={require(`../../../assets/img/products/${product.id}.png`)}
          alt={product.name}
          className={styles.icon}
        />
        <div>
          <h1 className={styles.name}>Hello</h1>
          <p className={styles.price}>{`$${product.price / 100}`}</p>
        </div>
      </div>
      <div className={styles.description}>
        <p>{product.description}</p>
        <button
          type='button'
          className={styles.button}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Product;
