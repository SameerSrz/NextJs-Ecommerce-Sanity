"use client"
import product from '@/sanity/product';
import React, {useEffect, useContext, createContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { client } from '@/sanity/lib/client';

const Context = createContext();
export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [qty, setQty] = useState(1);
    let foundProduct;
    let index;

    const getData = async () => {
        const query = '*[_type == "product"]';
        const products = await client.fetch(query);
      
        const bannerQuery = '*[_type == "banner"]';
        const bannerData = await client.fetch(bannerQuery);
      
        return {
          products,
          bannerData,
          revalidate: 10, // Set the revalidation interval in seconds
        };
      };

    const incQty = () =>{
        setQty((prevQty)=> prevQty + 1);
    }

    const decQty = () =>{
        setQty((prevQty)=> 
        {
            if(prevQty > 1)
            {
                return prevQty - 1
            } 
            else{
                return 1;
            }
        }
        );
    }

    const onAdd = (product,qty) =>{
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * qty)
        setTotalQuantity((prevTotalQty)=> prevTotalQty + qty)

        if(checkProductInCart){
            const updateCart = cartItems.map((item)=> {
                if(item._id === product._id){
                    return {
                        ...item,
                        quantity: item.quantity + qty
                    }
                }
            })
            setCartItems(updateCart);
        }else{
            product.quantity = qty;
            setCartItems([...cartItems,{...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    const onRemove = (product) =>{
        foundProduct = cartItems.find((item)=> item._id === product._id)
        let newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    const toggleCartItemQuantity = (id,value) =>{
        foundProduct = cartItems.find((item)=> item._id === id)
        index = cartItems.find((product)=> product._id === id)
        let newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === "inc"){
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantity((prevTotalQuantity)=> prevTotalQuantity + 1)
        }else if(value === "dec"){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantity((prevTotalQuantity)=> prevTotalQuantity - 1)
            }
        }
    }

    return (
        <Context.Provider
            value = {{
                showCart,
                setShowCart,
                totalPrice,
                totalQuantity,
                qty,
                cartItems,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                getData
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);