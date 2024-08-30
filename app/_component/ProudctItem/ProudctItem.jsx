import React from 'react'
import Image from 'next/image';
import { CiCircleList } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io5";
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import AddToCartBtn from './../../ProudctDetails/[id]/_components/AddToCartBtn/AddToCartBtn';
import DeleteFromCartBtn from '../../Cart/_components/DeleteFromCartBtn';



const ProudctItem = ({ val, cartDataId, filterCartFromProductId }) => {

  const dele = (data) => filterCartFromProductId(data)?.id;

  return (
    <div className='relative  group w-full overflow-hidden  hover:cursor-pointer '>
      <Link href={`/ProudctDetails/${val.id}`} className="  group border p-2  transition-all rounded-md  ">
        <Image className='rounded-md object-cover w-full h-[200px]' src={"http://localhost:1337" + val?.attributes?.banner?.data[0]?.attributes?.url} alt={val?.attributes?.title} width={400} height={100} />
        <div className="title p-3 flex items-center justify-between ">
          <p className=' text-[10px]    font-medium md:text-[12px] flex items-center  line-clamp-1 ' ><CiCircleList className='text-[20px] me-1 ' />{val?.attributes?.title}</p>
          <h2 className=' text-[10px]   font-medium md:text-[12px] flex items-center   ' >{val?.attributes?.price}<IoLogoUsd className='text-[12px] ' /></h2>
        </div>
      </Link>
      <SignedIn>
        <div className="absolute left-full top-0 transition-all group-hover:left-3/4">
          {
            cartDataId?.includes(val?.id) ? <DeleteFromCartBtn val={{ id: dele(val?.id) }} /> : <AddToCartBtn proudct_detail={{ data: { id: val.id } }} />
          }
        </div>
      </SignedIn>

    </div>
  )
}

export default ProudctItem
