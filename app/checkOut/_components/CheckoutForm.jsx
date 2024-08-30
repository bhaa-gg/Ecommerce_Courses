"use client"
import { useUser } from '@clerk/nextjs';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { myContext } from '../../_context/CartContext';
import { deleteCart } from './../../_utils/CartApis';
import { createOreder } from './../../_utils/orederApis';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const CheckoutForm = ({ amount }) => {

    const { user } = useUser()
    let { cartData } = useContext(myContext)
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")


    const elements = useElements();
    const stripe = useStripe();


    const send_mail = async () => {
        const res = await fetch('../../api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                to: user.primaryEmailAddress.emailAddress,
                userName: user.fullName,
            })
        })
    }

    const newOrder = async () => {

        const myData = {
            data: {
                email: user.primaryEmailAddress.emailAddress,
                username: user.fullName,
                amount,
                products: cartData?.map(el => el.id)
            }
        }

        await createOreder(myData).then(data => {
            if (data) {
                cartData?.forEach(async (el) => {
                    await deleteCart(el?.id)
                })
            }
        }).catch(err => console.log(err))

    }


    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();


        const handleError = (error) => {
            setLoading(false);
            setErrorMessage(error.message)
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError)
            return;
        }

        const res = await fetch('../../api/create-intent', {
            method: 'POST',
            body: JSON.stringify({
                amount,
            })
        })
        const clientSecret = await res.json();
        if (clientSecret) {
            send_mail()
            newOrder()
        }
        if (!stripe || !elements || !clientSecret) return;


        const result = await stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm",
            },
        })
        if (result.error) {
            console.log(result.error.message);
        } else {

        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className='h-auto'>

                <div className='w-4/5 md:w-3/4 mx-auto mt-10'>
                    <PaymentElement />
                    <button className=' mt-5 bg-secondry py-2 px-8 font-extrabold active:scale-90 text-white rounded-md transition-all' >{loading ? <AiOutlineLoading3Quarters /> : "Submit"}</button>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm;