import React from 'react'
import { Link } from 'react-router-dom'

function Education() {
    return ( <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-center">
            <div className="flex justify-center">
                <img src='media/images/education.svg' alt='edu' className="w-3/4"/>
            </div>
           <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-6"> Free and open market education</h1>
              <p className='text-gray-500 mb-4'>Varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading.</p>
              <Link className="text-blue-500 hover:text-blue-700 font-medium hover:underline inline-block mb-6"> Varsity <i className="fa-solid fa-arrow-right"></i></Link>

              <p className='text-gray-500 mt-6 mb-4'>TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.</p>
              <Link className="text-blue-500 hover:text-blue-700 font-medium hover:underline inline-block"> TradingQ&A <i className="fa-solid fa-arrow-right"></i></Link>
           </div>
        </div>
     </div> );
}

export default Education;