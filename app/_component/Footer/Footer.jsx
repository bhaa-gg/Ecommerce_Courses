"use client"
import { SignedIn, useUser } from '@clerk/nextjs'
import React from 'react'

const Footer = () => {
    return (
        <SignedIn>
            <div className='absolute bottom-0 w-full  pt-7' >
                Footer
            </div>
        </SignedIn>
    )
}

export default Footer
