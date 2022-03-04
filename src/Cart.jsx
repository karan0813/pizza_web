import React, { isValidElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectcart, selecttotalcart } from "./features/PIZA/cartslice"
import {
    selectamount, selecttopings
} from "./features/PIZA/amountSlice";

const Cart = () => {
    const [select, setselect] = useState(false)
    const cart = useSelector(selectcart)
    const totaldata = useSelector(selectamount)
    const toping = useSelector(selecttopings)
    const dispatch = useDispatch()

    // const newcart = cart.push(totaldata);
    // console.log(newcart);
    let testArr = cart.map(function (x, i) {
        return { "name": x, "state": totaldata[i], "toping": toping }
    }.bind(this));




    return (
        <div className="absolute top-10 md:w-fit w-screen h-fit bg-yellow-100 md:right-20 -right-0  ">
            <div className=" m-5 flex justify-start  items-center  w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h1 className="text-xl  font-bold ml-2">Your Cart</h1>
            </div>
            <div className="   md:ml-9 ">
                {testArr.map((val, index) => (
                    <div className="border  w-fit md:m-5  shadow-2xl bg-pink-50 flex ">
                        <div>
                            <img className="object-contain w-32 h-fit " src={val.name.url} alt=".." />
                        </div>
                        <div className="flex justify-between  bg-pink-50  w-72  ">
                            <div className="pl-2 space-y-5">
                                <h1 className=" font-sans font-semibold">{val.name.caption} </h1>
                                <p className="text-gray-600 font-bold">
                                    <span className="capitalize  text-black">total: </span>₹{val.state}/-</p>
                            </div>
                            <div className="">
                                <div className='flex items-center bg-red-200 border-2 border-red-700 px-3 font-bold rounded-2xl space-x-1  m-2'>
                                    <p className='mr-2 text-lg text-red-800 cursor-pointer'>-</p>
                                    1
                                    <p className='mr-2 text-lg text-red-800 cursor-pointer' >+</p>
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