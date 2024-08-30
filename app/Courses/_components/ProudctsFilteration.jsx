"use client"
import { useState } from "react";
import ProudctList from "../../_component/ProudctList/ProudctList";

const ProudctsFilteration = ({ proudcts }) => {
    const allDatas = proudcts;
    const [data, setData] = useState(proudcts)


    const cha = async (dataa) => dataa == "" || dataa == " " ? setData(proudcts) : setData({ data: proudcts?.data?.filter(val => val.attributes?.title.toLowerCase().startsWith(dataa.toLowerCase())) })
    const getallCat = () => {
        const CateArr = [];
        CateArr.push("ALL")
        proudcts?.data?.forEach(val => CateArr.includes(val.attributes?.category) ? "" : CateArr.push(val.attributes?.category))
        return CateArr
    }
    const filterByCat = (data) => data == "ALL" ? setData(allDatas) : setData({ data: allDatas.data?.filter(val => val.attributes?.category == data) })

    return (
        <>
            <div className="mx-5">
                <div className="filters flex justify-around my-2 p-3 ">
                    <input className={` border  rounded shadow w-1/2 p-4 my-2  focus:outline-primary `} onChange={(e) => cha(e.target.value)} type="text" placeholder="search" />
                    <select onChange={(e) => filterByCat(e.target.value)} className=" rounded-sm cursor-pointer outline-0 border border-primary" >
                        {
                            getallCat().map((val, i) => {
                                return <option selected={val === "ALL"} className="outline-0 rounded-sm border border-secondry bg-transparent " key={i} value={val}>{val}</option>
                            })
                        }
                    </select>
                </div>
                <ProudctList proudcts={data} />
            </div>
        </>
    )
}
export default ProudctsFilteration;

