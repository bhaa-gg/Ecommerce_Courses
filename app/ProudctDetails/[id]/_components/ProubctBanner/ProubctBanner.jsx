import Image from 'next/image'
import React from 'react'

const ProubctBanner = ({ proudct_detail }) => {
    return (
        <div className="w-full  md:w-1/2">
            {
                <Image
                    src={"http://localhost:1337" + proudct_detail?.data?.attributes?.banner?.data.at(0)?.attributes?.url}
                    alt='product-details-banner'
                    width={400}
                    height={400}
                    className='rounded-lg w-full'
                />
            }
        </div>
    )
}

export default ProubctBanner
