"use client"
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import React, { useState } from 'react'
import { AiOutlineMinus , AiOutlinePlus , AiFillStar , AiOutlineStar } from 'react-icons/ai';
import { Product } from '../components'
import { useStateContext } from '../Context/StateContext';

const ProductDetail = ({product, products}) => {
  
    const [index , setIndex] = useState(0)
    const { decQty, incQty, qty, onAdd } = useStateContext();
    
  return (
    <div>
      <div className='product-detail-container'>
        <div>
            <div className='product-detail-image'>
                <img src={urlForImage(product?.image && product?.image[index])} 
                  className='product-detail-image'
                />
            </div>
            <div className='small-images-container'>
              {
                product.image?.map((item,i)=> (
                  // eslint-disable-next-line react/jsx-key, @next/next/no-img-element
                  <img src={urlForImage(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                  key={item}
                  />
                ))
              }
            </div>
        </div>
        <div className='product-detail-desc'>
              <h1>{product.name}</h1>
              <div className='reviews'>
                <div className='flex flex-row'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>(20)</p>
              </div>
              <h4>Details: </h4>
              <p>{product.description}</p>
              <p className='price'>${product.price}</p>
              <div className='quantity'>
                <h3 className='bold-text'>Quantity:</h3>
                <p className='flex flex-row quantity-desc'>
                  <span className='minus' onClick={decQty} >
                    <AiOutlineMinus />
                  </span>
                  <span className='num' >
                    {qty}
                  </span>
                  <span className='plus' onClick={incQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className='buttons'>
                <button type='button' className='add-to-cart' onClick={() => onAdd(product,qty)} >
                  Add To Cart
                </button>
                <button type='button' className='buy-now' >
                  Buy Now
                </button>
              </div>
            </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {
              products.map((product) => <Product key={product._id} product={product} /> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
