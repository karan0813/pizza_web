import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import { selectCount } from "./features/counter/counterSlice"

const Navbar = () => {
    const [cartopen, setcartopen] = useState(false)
    const cart = useSelector(selectCount)
    return (
        <div className="lg:w-screen md:w-screen w-full bg-[#FFD684] h-16 flex justify-between px-20 items-center ">
            <div>
                <img className="object-contain h-20  w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvpwLcAByhTaxHdiPEEFk6UeD7C5D7xrNzA&usqp=CAU" alt="" />
            </div>
            <div >
                <div className="flex items-center">
                    <h1>{cart}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                        {!cartopen ? <svg onClick={() => (setcartopen(true))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg> : <svg onClick={() => (setcartopen(false))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>}
                    </div>
                    {cartopen && <Cart />}
                </div>
            </div>
        </div>
    )
}

export default Navbar