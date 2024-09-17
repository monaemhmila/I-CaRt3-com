import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AddToWishList from '../AddToWishList';

const ProductListFAV = (props) => {
  const { products, updateWishlist, authenticated } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
                    src={product.imageUrl ? product.imageUrl : '/images/placeholder-image.png'}
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

    </Slider>
  );
};

export default ProductListFAV;
