import React, { isValidElement, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectcart, selecttotalcart } from "./features/PIZA/cartslice"
import {
    selectamount, selecttopings
} from "./features/PIZA/amountSlice";

const Cart = () => {
    const [select, setselect] = useState(false)
    const cart = useSelector(selectcart)
    const totaldata = useSelector(selectamount)
    const toping = useSelector(selecttopings)

    // const newcart = cart.push(totaldata);
    // console.log(newcart);
    let testArr = cart.map(function (x, i) {
        return { "name": x, "state": totaldata[i], "toping": toping }
    }.bind(this));

    console.log(testArr);

    return (
        <div className="absolute top-10 md:w-1/2 w-screen h-fit bg-yellow-100 md:right-20 -right-5 m-5 ">
            <div className="flex justify-start  items-center m-5 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h1>Your Order</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  md:ml-9 ml-6">
                {testArr.map((val) => (
                    <div className="border border-black w-fit m-5 rounded-t-lg shadow-xl bg-pink-50 ">
                        <div>
                            <img className="object-contain w-72 h-fit rounded-t-lg" src={val.name.url} alt=".." />
                        </div>
                        <div className="flex justify-between  bg-pink-50  w-72  ">
                            <div className="pl-2">
                                <h1>{val.name.caption} [Medium]</h1>
                                <p>₹{val.state}</p>
                            </div>
                            <div className="">
                                <div className='flex items-center bg-red-200 border-2 border-red-700 px-3  rounded-2xl space-x-1  m-2'>
                                    <p className='mr-2 text-lg text-red-800'>-</p>
                                    1
                                    <p className='mr-2 text-lg text-red-800' >+</p>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Cart