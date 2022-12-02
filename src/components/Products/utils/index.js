export const getListOfProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong!');
};

export const createNewProduct = async (payload) => {
  const response = await fetch('http://localhost:3001/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    return await response.json();
  };
  throw new Error('Something went wrong!')
}

export const retrieveProduct = async (id) => {
  const response = await fetch(`http://localhost:3001/products/${id}`);
  if (response.ok) {
    return await response.json()
  };
  throw new Error('Something went wrong!');
}

export const updateProduct = async (payload) => {
  const response = await fetch(`http://localhost:3001/products/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong!');
};

export const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:3001/products/${id}`, {
    method: 'DELETE',
  })
  if(response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong!');
}
