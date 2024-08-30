"use client"
import React, { useContext } from 'react'
import { myContext } from '../../_context/CartContext'
import { deleteCart } from '../../_utils/CartApis'
import { PiTrashSimpleDuotone } from "react-icons/pi";
import toast from 'react-hot-toast'

const DeleteFromCartBtn = ({ val }) => {
    let { setCartCounter, cartData, setCartData, cartCounter } = useContext(myContext)

    const delete_Cart = async () => {
        await deleteCart(val.id).then(res => {

            setCartData(cartData => cartData.filter(val => val.id != res?.data?.data?.id))
            toast.error('Delete Success ', {
                duration: 3000
            });

            setCartCounter((cartData?.length) - 1)
            console.log(cartCounter);

        }).catch(err => console.error(err));
    }

    return <PiTrashSimpleDuotone onClick={() => delete_Cart()} className='text-red-300 hover:text-red-800 text-[40px] transition-all cursor-pointer' />
}

export default DeleteFromCartBtn
