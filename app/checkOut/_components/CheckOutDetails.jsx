"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const CheckOutDetails = ({ amount }) => {




    const stripePromise = loadStripe(process.env.NEXT_PULBIC_PUBLISHABLE_KEY);
    const options = {
        mode: 'payment',
        currency: 'usd',
        amount,
    }

    if (!stripePromise || !options || !amount) return <h1>Waitig Data ...</h1>
    return (
        <>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={amount} />
            </Elements>
        </>
    )
}

export default CheckOutDetails
