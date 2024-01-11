"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'
import { useStateContext } from '../Context/StateContext'

const Header = () => {

  const { totalQuantity, showCart, setShowCart } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          MD Collection
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      {
        showCart && <Cart/>
      }
    </div>
  )
}

export default Header
