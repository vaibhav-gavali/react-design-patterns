import React from 'react';
import useResource from './hooks/useResource';

const ProductInfo = ({ productId }) => {
  const product = useResource(`/products/${productId}`);
  const { name, price, description, rating } = product || {};

  if (!product) {
    return;
  }

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};

export default ProductInfo;
