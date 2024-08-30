import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import AddToCartBtn from './../AddToCartBtn/AddToCartBtn';
import { addCart } from '../../../../_utils/CartApis';
const ProubctInfo = async ({ proudct_Filteration, proudct_detail }) => {


    const add = async () => {
        let data = {
            data: {
                user_Name: "bhaa",
                Email: "bhaatiti281@gmail.com",
                proudcts: [proudct_detail?.data?.id],
            }
        }
        await addCart(data)
    }

    return (
        <div className="w-full  md:w-1/2">
            <h2 className='text-[20px]'>{proudct_detail?.data?.attributes?.title}</h2>
            <h2 className='text-[15px] text-gray-400'>{proudct_detail?.data?.attributes?.category}</h2>
            <h2 className='text-[11px] mt-2'>{proudct_detail?.data?.attributes?.description?.at(0)?.children?.at(0).text}</h2>
            <h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>{proudct_detail?.data?.attributes?.instantDelivery ? "line-through" : ""} Eligible For Instant Delivery</h2>
            <h2 className='text-[24px] text-primary my-2'>$ {proudct_detail?.data?.attributes?.price}</h2>

            <SignedIn  >
                <AddToCartBtn proudct_detail={proudct_detail} />
            </SignedIn>
            <SignedOut>
                <Link href={"/sign-in"} className='flex gap-2 p-2 text-white rounded-lg  bg-primary w-fit text-center hover:bg-secondry transition-all active:scale-90 '> Add To Cart</Link>
            </SignedOut>

        </div>
    )
}

export default ProubctInfo
