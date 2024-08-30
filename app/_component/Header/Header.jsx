"use client"
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { myContext } from '../../_context/CartContext';
import { getCart } from '../../_utils/CartApis';
import Cart from './../Cart/Cart';
import CartAmin from '../../_animation/CartAmin';
const Header = () => {



    let { setCartDataIds, cartCounter, setCartCounter, cartData, setCartData } = useContext(myContext)
    let { user } = useUser()
    const [cartHide, setCartHide] = useState(false)

    const get_Crt = async () => {
        if (user)
            await getCart(user.primaryEmailAddress.emailAddress).then(async (data) => {
                if (data) {
                    await setCartCounter(data?.data?.data?.length);
                    await setCartData(data?.data?.data);
                    await setCartDataIds(data?.data?.data.map(val => val?.attributes?.proudcts?.data?.at(0).id))
                }
            }).catch(err => console.log(err))
    }


    useEffect(() => {
        get_Crt()
    }, [user, cartCounter])



    return (
        <SignedIn>
            <header className="bg-white border-b border-secondry">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <Link href={"/"}>
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="hidden w-1/6 bg-secondry  rounded py-2  md:block">
                            <nav aria-label="Global">
                                <ul className="flex    items-center  mx-auto w-fit gap-6 text-sm">
                                    <li>
                                        <Link className="text-black text-[15px]  hover:text-white hover:font-bold transition-all" href="/"> Home </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <SignedOut>
                                <div className="sm:flex sm:gap-4">
                                    <SignInButton className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-secondry transition-all" />
                                    <div className="hidden sm:flex">
                                        <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-secondry" href="#">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <div className='relative' >

                                    <div onClick={() => setCartHide(!cartHide)} className={`cart ${cartCounter ? "flex" : "hidden"} flex cursor-pointer items-center justify-center `}>
                                        <FiShoppingCart className="text-[20px]" />({cartCounter})

                                    </div>
                                    <CartAmin cartHide={cartHide} >
                                        <Cart cartHide={cartHide} setCartHide={setCartHide} />
                                    </CartAmin>
                                </div>
                                <UserButton />
                            </SignedIn>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </SignedIn>

    )
}

export default Header
