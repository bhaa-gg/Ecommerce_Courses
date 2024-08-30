"use client"
import Link from 'next/link'
import { useContext } from 'react'
import { myContext } from '../../_context/CartContext'

const Cart = ({ setCartHide, cartHide }) => {
    let { cartCounter, cartData, } = useContext(myContext)

    return (
        <div className={`border-secondry p-1  ${cartHide ? "" : "hidden"} absolute rounded-md top-[150%] -right-32  overflow-y-auto z-10  h-[400px] w-[700%]`}>
            <div className="relative  w-full max-w-sm border rounded-md border-secondry bg-gray-100 px-4 py-8 sm:px-6 lg:px-8" aria-modal="true" role="dialog" tabIndex={-1}>
                <div className="mt-4 space-y-6">
                    <ul className="space-y-4">
                        {
                            cartData?.map((val, i) => {
                                return (
                                    <li key={i} className="flex items-center gap-4">
                                        <img src={"http://localhost:1337" + val.attributes.proudcts.data.at(0).attributes.banner.data.at(0).attributes.url} alt="s" className="size-16 rounded object-cover" />
                                        <div>
                                            <h3 className="text-sm text-gray-900 line-clamp-1">{val.attributes.proudcts.data.at(0).attributes.title}</h3>
                                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                    <dt className="inline">Category:</dt>
                                                    <dd className="inline">{val.attributes.proudcts.data.at(0).attributes.category}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </li>
                                )


                            })
                        }

                    </ul>
                    <div className="space-y-4 text-center">
                        <Link href="/Cart" onClick={() => setCartHide(false)} className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
                            View my cart ({cartCounter})
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
