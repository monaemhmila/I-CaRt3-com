import React from 'react';
import { Link } from 'react-router-dom';

const ProductHome = (props) => {
  const { products = [] } = props; // Default to an empty array

  return (
    <div className='p-list'>
      {Array.isArray(products) && products.map((product, index) => ( // Check if products is an array
        <Link to={`/product/${product._id}`} key={index} className='d-flex flex-row align-items-center mx-0 mb-3 product-box'>
          <img
            className='item-image'
            src={product.imageUrl ? product.imageUrl : '/images/placeholder-image.png'}
            alt={product.name}
          />
          <div className='d-flex flex-column justify-content-center px-3 text-truncate'>
            <h4 className='text-truncate'>{product.name}</h4>
            <p className='mb-2 text-truncate'>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductHome;
