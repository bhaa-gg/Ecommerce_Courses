"use client"
import React, { useContext, useState, useEffect } from 'react'
import { myContext } from './../../_context/CartContext';
import { TbMoodEmpty } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import DeleteFromCartBtn from './DeleteFromCartBtn';
import { useRouter } from 'next/navigation';

const CartStyle = () => {
    let { cartCounter, cartData } = useContext(myContext)

    const [amount, setAmount] = useState(0)
    const router = useRouter()

    const TotalMoney = () => {
        let total = 0;
        cartData?.forEach(element => {
            total += element.attributes?.proudcts?.data?.at(0).attributes.price;
        });
        setAmount(total)
        return total;
    }


    useEffect(() => {
        TotalMoney()
    }, [])


    return (
        <div className=''>
            {
                cartCounter ? <div className='mx-5 pt-5'>
                    {
                        cartData?.map((val, id) => {
                            return <div key={id}>
                                <div className="grid flex-wrap grid-cols-12 my-3 gap-2 rounded-md border  border-secondry p-2">
                                    <div className={`  col-span-12 sm:col-span-10 md:col-span-3 `} >
                                        <Image width={400} height={100} src={"http://localhost:1337" + val?.attributes?.proudcts?.data?.at(0).attributes?.banner?.data?.at(0).attributes?.url} className="w-full object-cover h-full rounded-md" alt="" />
                                    </div>
                                    <div className={`  col-span-12 sm:col-span-9     md:col-span-7 flex justify-center flex-col `} >
                                        <h2 className='text-[25px]' >{val?.attributes?.proudcts?.data?.at(0).attributes.title}</h2>
                                        <p className='text-[13px] my-2' >{val?.attributes?.proudcts?.data?.at(0).attributes.decription.at(0).children.at(0).text}</p>
                                        <h3 className='text-[20px] my-3 text-slate-400 font-bold' >{val?.attributes?.proudcts?.data?.at(0).attributes.category}</h3>
                                        <h3 className='text-[22px]' >Price : {val?.attributes?.proudcts?.data?.at(0).attributes.price}$</h3>
                                    </div>
                                    <div className={`  col-span-12 sm:col-span-3 md:col-span-2  flex items-center justify-center`} >
                                        <DeleteFromCartBtn val={val} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <h2 className='my-2' >Total :{amount}$ </h2>
                    <Link href={`/checkOut/${amount}`} className='my-2 bg-secondry py-1 px-4 font-extrabold active:scale-90 text-white rounded-md transition-all' >Check Out</Link>
                </div>
                    : <h1 className='text-center flex item-center text-secondry justify-center  pt-10 text-5xl' >Your Cart Empty <TbMoodEmpty className="ms-2 text-secondry" /></h1>
            }

        </div>
    )
}

export default CartStyle
