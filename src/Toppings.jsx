import React, { useState } from 'react'
import {
    setamount, selectamount, settopings
} from "./features/PIZA/amountSlice";
import { Addcart } from "./features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux';
import { setcart } from './features/PIZA/cartslice';

const Toppings = ({ rupe, setList, fulldata }) => {
    const [topping, settoping] = useState(null)
    const [pushitems, setpushitems] = useState([])
    const dispatch = useDispatch()






    const array = [
        {
            name: "Cheese",
            price: 35
        }, {
            name: "Jalapenos",
            price: 30
        }, {
            name: "Veg Kebab",
            price: 40
        }, {
            name: "Red Paprika",
            price: 45
        }, {
            name: "Sweet Corn",
            price: 60
        }, {
            name: "Baby Corn",
            price: 20
        }, {
            name: "Black Olives",
            price: 40
        }, {
            name: "Onion",
            price: 50
        }, {
            name: "Spiced Paneer",
            price: 30
        }, {
            name: "Red Capsicum",
            price: 50
        }, {
            name: "Mushroom",
            price: 40
        }, {
            name: "Tomato",
            price: 50
        }]
    const data = pushitems.reduce((partialSum, a) => partialSum + a, 0);
    const totaldata = data + rupe;



    return (
        <div className=" flex justify-center items-center flex-col lg:w-1/4 p-5 mx-auto background  shadow-md  rounded-md ">
            <h1 className="m-3 text-left w-full text-xl font-bold ">Toppings</h1>
            {array.map((val, index) => (
                <div key={index} className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-800">{val.name}</h1>
                    <div className="flex items-center ">
                        <h2 className="font-semibold text-gray-800">₹ {val.price}</h2>
                        < input className="ml-1" id='50' name={val.name}
                            value={val.price}
                            onChange={(e) => (settoping(pushitems.push(Number(e.target.value))))}
                            onClick={() => (dispatch(settopings(val.name)))}
                            type="checkbox" />
                    </div>
                </div>

            ))}
            <button className="px-5 py-2 bg-red-400 hover:bg-red-500 w-full mt-5" onClick={() => (dispatch(setamount(totaldata)), dispatch(setcart(fulldata)), setList(false), dispatch(Addcart()))} >Done</button>
            <div className=" capitalize text-white font-bold px-5 py-2 bg-red-600 w-full mt-5"  > totale: {totaldata}</div>
        </div>
    )
}

export default Toppings;