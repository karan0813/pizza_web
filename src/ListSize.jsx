import React, { useState } from 'react'
import Toppings from './Toppings'



const ListSize = ({ setList, pricesmall, pricemedum, pricelarg, fulldata }) => {
    const [rupe, setrupe] = useState(0)


    return (
        <>
            <div className="w-screen h-fit absolute top-0 bg-transparent   p-6 space-y-3 ">
                <div className=" flex justify-center items-center flex-col  lg:w-1/4 p-5 mx-auto background  shadow-md  rounded-md  ">
                    <button onClick={() => (setList(false))} className=" float-right ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black  animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <h1 className="m-3 text-left w-full text-xl font-bold ">Size</h1>
                    <div className="flex items-center justify-between w-full"><h1 className="font-semibold text-gray-800">Small</h1><div className="flex items-center ">
                        <h2 className="font-semibold text-gray-800">₹{pricesmall}</h2>
                        < input id={pricesmall} name="JTP" value={rupe} onClick={(e) => (setrupe(Number(e.target.id)))} className="ml-1" type="radio" /></div></div>
                    <div className="flex items-center justify-between w-full"><h1 className="font-semibold text-gray-800">Medium</h1><div className="flex items-center">
                        <h2 className="font-semibold text-gray-800">₹{pricemedum}</h2>
                        < input id={pricemedum} name="JTP" value={rupe} onClick={(e) => (setrupe(Number(e.target.id)))} className="ml-1" type="radio" /></div></div>
                    <div className="flex items-center justify-between w-full"><h1 className="font-semibold text-gray-800">Large</h1><div className="flex items-center">
                        <h2 className="font-semibold text-gray-800">₹{pricelarg}</h2>
                        < input id={pricelarg} name="JTP" value={rupe} onClick={(e) => (setrupe(Number(e.target.id)))} className="ml-1" type="radio" /></div></div>
                </div>

                <Toppings fulldata={fulldata} rupe={rupe} setList={setList} />

            </div>

        </>
    )
}

export default ListSize