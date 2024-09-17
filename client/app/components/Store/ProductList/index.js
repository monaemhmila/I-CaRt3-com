import React from 'react';
import { Link } from 'react-router-dom';
import AddToWishList from '../AddToWishList';

const ProductList = (props) => {
  const { products, updateWishlist, authenticated } = props;

  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <div key={index} className='product-container'>
          <div className='item-box'>
            <div className='add-wishlist-box'>
              <AddToWishList
                id={product._id}
                liked={product?.isLiked ?? false}
                enabled={authenticated}
                updateWishlist={updateWishlist}
                authenticated={authenticated}
              />
            </div>
            <Link to={`/product/${product.slug}`} className='item-link'>
              <div className='item-image-container'>
                <img
                  className='item-image'
                  src={`${product.imageUrl
                    ? product.imageUrl
                    : '/images/placeholder-image.png'
                    }`}
                  alt={product.name}
                />
                <div className='overlay'>
                  <div className='item-details'>
                    <h1 className='item-name'>{product.name}</h1>

                  </div>
                  <div className='item-footer'>
                    <p className='price'>${product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
