import React from 'react'
import { Link } from 'react-router-dom'
 function Pricing() {
    return (
      <div className="container mx-auto p-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-center">
            <div>
               <h1 className="text-3xl font-semibold text-gray-800 mb-12"> Unbeatable pricing</h1>
               <p className='text-gray-500 mb-4'>We pioneered the concept of discount broking and price <br></br> in India. Flat fees and no hidden charges.</p>
               <Link className="text-blue-500 hover:text-blue-700 font-medium hover:underline"> See pricing <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="mb-12">
               <div className="flex justify-between items-center text-center">
               <div className='w-1/3 flex flex-col items-center'><img src='media/images/pricing0.svg' className="w-2/3 mb-2" alt='rs'/> 
               <p className="text-xs text-gray-500">Free account <br></br>
               opening</p></div>
               <div className='w-1/3 flex flex-col items-center'><img src='media/images/pricing0.svg' className="w-2/3 mb-2" alt='rs'/>
               <p className="text-xs text-gray-500">Free equity delivery <br></br>
               and direct mutual funds</p>
               </div>
               <div className='w-1/3 flex flex-col items-center'><img src='media/images/intradayTrades.svg' className="w-2/3 mb-2" alt='rs'/>
               <p className="text-xs text-gray-500">Intraday and
             <br></br>
             F&O</p></div>
            </div>
            </div>
         </div>
      </div>
     );
 }
 
 export default Pricing;