"use client"

import React, { useContext } from 'react'
import { PiShoppingCartSimple } from "react-icons/pi";

import toast from 'react-hot-toast';
import { useUser } from '@clerk/nextjs';
import { addCart, getCart } from './../../../../_utils/CartApis';
import { myContext } from '../../../../_context/CartContext';

const AddToCartBtn = ({ proudct_detail }) => {
    const { user } = useUser();
    let { setCartCounter, cartData, setCartData } = useContext(myContext)

    const add = async () => {
        let data = {
            data: {
                user_Name: user.fullName,
                Email: user.primaryEmailAddress.emailAddress,
                proudcts: [proudct_detail.data.id],
            }
        }
        const ifExists = cartData.find(val => {
            return val?.attributes?.proudcts?.data?.at(0).id == data.data.proudcts.at(0)
        })

        if (ifExists) {
            toast.success("Already Added")
            return;
        }

        await addCart(data).then(res => {
            if (res) {
                toast.success('Add To Cart Successful', {
                    duration: 3000
                });
            }
        }).catch(err => console.log(err))


        await getCart(user.primaryEmailAddress.emailAddress).then(data => {
            if (data) {
                setCartCounter(data?.data?.data?.length);
                setCartData(data?.data?.data);
            }
        }).catch(err => console.log(err))
    }
    return <button onClick={add} className='flex gap-2 p-2 text-black rounded-lg bg-primary w-fit text-center hover:bg-secondry transition-all active:scale-90 ' > <PiShoppingCartSimple className="text-white text-2xl" /></button>

}



export default AddToCartBtn
