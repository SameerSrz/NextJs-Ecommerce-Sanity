/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useRef } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline, TiOutlineDelete } from 'react-icons/ti'
import { useStateContext } from '../Context/StateContext'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'

const Cart = () => {

  const cartRef = useRef();
  const { totalPrice, setShowCart, totalQuantity, cartItems, toggleCartItemQuantity, onRemove } = useStateContext();
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={()=> setShowCart(false)}>
            <AiOutlineLeft/>
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantity} items)</span>
        </button>
          {
            cartItems.length < 1 && (
              <div className='empty-cart'>
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link href={"/"}>
                  <button
                   type='button'
                   onClick={()=> setShowCart(false)}
                   className='btn'
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )
          }

          <div className='product-container'>
            {
              cartItems.length >= 1 && cartItems.map((item)=>{
                return (<div className='product' key={item._id}>
                  <img src={urlForImage(item?.image[0])} 
                    className='cart-product-image' alt='image'
                  />
                  <div className='item-desc'>
                    <div className='flex '>
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className='qty mt-[30px]'>
                      <div>
                        <p className='qty flex-row quantity-desc'>
                          <span className='minus' onClick={()=> toggleCartItemQuantity(item._id,"dec")} >
                            <AiOutlineMinus />
                          </span>
                          <span className='num' >
                            {item.quantity}
                          </span>
                          <span className='plus' onClick={()=> toggleCartItemQuantity(item._id,"inc")}>
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type='button'
                        className='remove-item'
                        onClick={()=> onRemove(item)}>
                          <TiDeleteOutline/>
                        </button>
                    </div>
                  </div>
                </div>)
              })
            }
          </div>
          {
            cartItems.length >= 1 && (
              <div className='cart-bottom'>
                <div className='total'>
                  <h3>Subtotal:</h3>
                  <h3>{totalPrice}</h3>
                </div>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='btn'
                    onClick="">
                      Pay with Stripe
                    </button>
                </div>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default Cart
