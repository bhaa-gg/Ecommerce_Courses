"use server"
import { getProudct } from '../_utils/ProudctApis';
import ProudctsFilteration from './_components/ProudctsFilteration';


export default async function page() {
    const products = await getProudct();
    return <>
      
        <ProudctsFilteration proudcts={products} />
    </>
}