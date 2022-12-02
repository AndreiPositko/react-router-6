// libs
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from './styles.module.scss';

const ProductCard = ({ product }) => {
  return (
    <li key={product.id}>
      <Link to={product.id} className={styles.wrapper}>
        <img
          className={styles.productImage}
          src={require(`../../../../assets/img/products/${product.id}.png`)}
          alt={product.name}
        />
        <div>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>{`$${product.price / 100}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
