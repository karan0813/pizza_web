import React from 'react'
import { useSelector } from 'react-redux'
import { selectcart, selecttotalcart } from "./features/PIZA/cartslice"
import {
    selectamount
} from "./features/PIZA/amountSlice";

const Cart = () => {
    const cart = useSelector(selectcart)
    const totaldata = useSelector(selectamount)

    return (
        <div className="absolute top-10 w-1/3 h-fit bg-yellow-100 right-20 ">
            <h1 className="text-2xl ml-5 m-7">Cart</h1>
            {cart.map((val) => (

                <div key={val.id} className="w-96 border border-black mx-auto m-3 ">
                    <div className=" flex justify-between  p-3  ">
                        <img className=" object-contain w-32 h-32 rounded-lg" src={val.url} alt=".." />
                        <h1 className="mr-20 text-lg font-bold">{val.caption}</h1>

                    </div>



                </div>



            ))}





        </div>
    )
}

export default Cart