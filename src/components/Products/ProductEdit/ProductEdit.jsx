// libs
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// utils
import { createNewProduct, retrieveProduct, updateProduct, deleteProduct } from '../utils';

// styles
import styles from './styles.module.scss';

const ProductEdit = ({ isEdit }) => {
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!isEdit) {
      setForm({
        id: '',
        name: '',
        price: 0,
        description: '',
      });
      return;
    }

    (async () => {
      try {
        const product = await retrieveProduct(id);
        setForm(product);
      } catch (e) {
        navigate('/admin', { replace: true });
        console.warn(e);
      }
    })();
  }, [isEdit]);

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreateProduct = async () => {
    try {
      const { id } = await createNewProduct(form);
      alert(`${form.name} has been created!`);
      navigate(`/admin/${id}`);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(form);
      alert(`Updated ${form.name}`);
      navigate('/admin');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleDeleteProduct = async () => {
    if (!window.confirm(`Really delete ${form.name}?`)) return;
    try {
      await deleteProduct(id);
      alert(`Deleted ${form.id}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  console.log('first');
  return (
    <form className={styles.productForm}>
      <input
        value={form.id}
        type='text'
        name='id'
        placeholder='ID'
        className={styles.input}
        onChange={({ target }) => updateField(target)}
      />

      <input
        value={form.name}
        type='text'
        name='name'
        placeholder='Name'
        className={styles.input}
        onChange={({ target }) => updateField(target)}
      />

      <input
        value={form.price}
        type='text'
        name='price'
        placeholder='Price'
        className={styles.input}
        onChange={({ target }) => updateField({ name: target.name, value: parseInt(target.value, 10) })}
      />

      <textarea
        value={form.description}
        name='description'
        placeholder='Description'
        className={`${styles.input} ${styles.description}`}
        onChange={({ target }) => updateField(target)}
      />

      {!isEdit && (
        <button
          type='button'
          className={styles.productButton}
          onClick={handleCreateProduct}
        >
          Create
        </button>
      )}

      {isEdit && (
        <button
          type='button'
          className={styles.productButton}
          onClick={handleUpdateProduct}
        >
          Update
        </button>
      )}

      {isEdit && (
        <button
          type='button'
          className={styles.productButton}
          onClick={handleDeleteProduct}
        >
          Delete
        </button>
      )}
    </form>
  );
};

export default ProductEdit;
