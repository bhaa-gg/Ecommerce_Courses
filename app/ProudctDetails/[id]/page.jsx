import React from 'react'
import ProubctBanner from './_components/ProubctBanner/ProubctBanner';
import ProubctInfo from './_components/ProubctInfo/ProubctInfo';
import { categoryFilteration, getProudctDetails } from '../../_utils/ProudctApis';
import ProudctList from '../../_component/ProudctList/ProudctList';

const page = async ({ params }) => {
    const proudct_detail = await getProudctDetails(params?.id)
    const proudct_Filteration = await categoryFilteration(proudct_detail?.data?.attributes?.category)
    return (
        <div className='px-5  mx-auto pt-10 md:container '>
            <div className="flex p-2 items-center  gap-4 md:gap-20 flex-col justify-between md:flex-row">
                <ProubctBanner proudct_detail={proudct_detail} />
                <ProubctInfo proudct_Filteration={proudct_Filteration} proudct_detail={proudct_detail} />
            </div>
            <div className="mt-3">
                <h2 className="py-4 " >Similar Products Category </h2>
                <ProudctList proudcts={proudct_Filteration} />
            </div>
        </div>
    )
}

export default page
