import React from 'react'
import ProudctList from '../ProudctList/ProudctList';
import { getProudct } from './../../_utils/ProudctApis';
import Link from 'next/link';
import { MdReadMore } from "react-icons/md";


const ProudctSection = async ({ inPage }) => {

    const proudcts = await getProudct();

    return (
        <div className='px-10 md:px-20 ' >
            <h2 className='text-center cursor-pointer my-2 sm:text-start' >Our Latest Proudcts</h2>
            {

                proudcts?.data?.length ? <ProudctList inPage={inPage} proudcts={proudcts} /> : <h2 className="text-center text-red-600 font-bold" >No Proudcts Here</h2>
            }
            <div className={`w-[12%]   ms-auto ${proudcts?.data?.length || inPage ? "" : "hidden"} my-4`} >
                {

                    proudcts?.data?.length ? <Link href={"/Courses"} className={`bg-primary flex items-center justify-center  rounded cursor-pointer text-center text-white w-full  py-3 px-2`}>show More <MdReadMore className='text-2xl text-white ms-2' /></Link> : ""
                }


            </div>
        </div>
    )
}

export default ProudctSection
