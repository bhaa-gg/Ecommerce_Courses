"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

const CartAmin = ({ children, cartHide }) => {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    animate={{ opacity: cartHide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default CartAmin
