import React, { useState } from 'react';
import './App.css';
import ListSize from './ListSize';
import Navbar from './Navbar';
import { setcart  } from "./features/PIZA/cartslice"
import { useDispatch} from 'react-redux';
import { list } from 'postcss';


function App() {
  const [List, setList] = useState(false)
  const [click , setclick]=useState(false)
  const [pricesmall, setpricesmall] = useState("")
  const[pricemedum , setpricemedum]=useState("")
  const [pricelarg, setpricelarg] = useState("")
  const dispatch = useDispatch()
  

  

  const pizaData = [
    {
    id:1,
    url: 'https://www.5dollardinners.com/wp-content/uploads/2016/01/Chicken-Margherita-Pizza-from-5DollarDinners-500x375.jpg',
      caption: 'Margherita',
    price: [
        {
          small: 179,
          meduim: 379,
          large:579
        }
      ],
     
  },
    {
    id:2,
    url: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.954d93452557209bebe0b7f49e776ba2.1.jpg',
      caption: 'Spiced Paneer',
    price: [
        {
          small: 129,
          meduim: 349,
          large:589
        }
    ]
  },
    {
    id:3,
    url: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-feast.c83561d7dd57a45adea3db7e8ee6914e.1.jpg',
      caption: 'Veggie Feast',
    price: [
        {
          small: 199,
          meduim: 319,
          large:579
        }
    ]
    },
     {
    id:4,
    url: 'https://www.alfrescochicken.com/wp-content/uploads/2019/07/Jenny-With-The-Good-Eats-BBQ-Chicken-Pizza.jpg',
       caption: 'Smoked Chiken ',
    price: [
        {
          small: 179,
          meduim: 329,
          large:519
        }
    ]
  },
    {
    id:5,
    url: 'https://static.toiimg.com/thumb/59863239.cms?width=1200&height=900',
      caption: 'Corn Veggie',
      price: [
        {
          small: 149,
          meduim: 379,
          large:539
        }
    ]
  },
    {
    id:6,
    url: 'https://b.zmtcdn.com/data/pictures/0/3301900/9cbc4b9af4e62e517d84e10931b66f9d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    caption: 'Napoli Veggies',
     price: [
        {
          small: 189,
          meduim: 349,
          large:589
        }
    ]
  },
];
  return (
    <>
      <Navbar />
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  m-5  bg-purple-200 rounded-sm shadow-2xl w-fit mx-auto ">
        {pizaData.map(({url,caption,id,price  }, index) => (
          <div key={id} className="m-10 shadow-xl  ">
            <div className="bg-green-700 rounded-t-lg ">
             <div className="h-44 w-full  bg-gray-700">
                 <img className="object-cover h-44 w-full rounded-t-lg" src={url} alt=''/>
              </div>
              
             <div className=" p-2 space-y-2 bg-gray-500  w-full  ">
              <h1 className="text-xl font-semibold">{caption}</h1>
                 <p className="bg-green-600 flex items-center px-3 rounded-xl  w-fit">5 <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></span>
                  
                </p>
                <h1 className="font-semibold">₹ {price[0].small}</h1>
                <button className="px-5 py-1 bg-red-400 rounded-md"  onClick={() => (
                  setclick(true),
                  setList(true),
                  setpricesmall(price[0].small),
                  setpricemedum(price[0].meduim),
                  setpricelarg(price[0].large),

                  dispatch(setcart({url,caption,id,price } ))

                 
                )}
                >Add +</button>
              </div>
              </div>
          </div>
       ))}
      </div>
      {List && <ListSize setList={setList} pricesmall={pricesmall} pricemedum={pricemedum} pricelarg={pricelarg}/>}
    </>
  );
}

export default App;
