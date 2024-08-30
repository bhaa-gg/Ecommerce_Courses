"use client"
import React, { createContext, useState } from 'react'



export let myContext = createContext(0)


const CartContext = ({ children }) => {
    let [cartCounter, setCartCounter] = useState(0)
    let [cartData, setCartData] = useState(null)
    let [cartDataIds, setCartDataIds] = useState(null)
    const [amount, setAmount] = useState(1)
    return (<myContext.Provider value={{ cartDataIds, setCartDataIds, cartCounter, setCartCounter, cartData, setCartData, amount, setAmount }}>
        {children}
    </myContext.Provider>)
}

export default CartContext
