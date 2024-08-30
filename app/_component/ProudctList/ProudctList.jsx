'use client'
import React, { useContext } from 'react'
import ProudctItem from '../ProudctItem/ProudctItem';
import { BiSolidNoEntry } from "react-icons/bi";
import { myContext } from '../../_context/CartContext';


const ProudctList = ({ proudcts, inPage }) => {

    let { cartData, cartDataIds } = useContext(myContext)

    const filterCartFromProductId = (id) => cartData?.find(val => id == val?.attributes?.proudcts?.data?.at(0).id)



    if (!proudcts?.data?.length) return <h1 className='text-center text-secondry flex mt-5 justify-center justify-items-center item-center align-middle  text-2xl'>No Products Please Try Again{<BiSolidNoEntry className='ms-4  text-2xl text-secondry' />}</h1>
    return (
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3' >

            {
                proudcts?.data?.map((val, i) => {

                    if (inPage && i < 4)
                        return <ProudctItem filterCartFromProductId={filterCartFromProductId} cartDataId={cartDataIds} val={val} key={val.id} />

                    if (!inPage)
                        return <ProudctItem filterCartFromProductId={filterCartFromProductId} cartDataId={cartDataIds} val={val} key={val.id} />

                })
            }
        </div>
    )
}

export default ProudctList 
