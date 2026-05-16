import React from 'react'
import { Link } from 'react-router-dom'


function Stats() {
    return ( 
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-4">
                <h1 className='text-3xl font-semibold mb-12 text-gray-800'>Trust with confidence</h1>
                <h2 className='text-xl font-medium text-gray-800 mb-2'>Customer-first always</h2>
                <p className='text-gray-500 mb-8'>That's why 1.5+ crore customers trust StockX with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                 
                <h2 className='text-xl font-medium text-gray-800 mb-2'>No spam or gimmicks</h2>
                <p className='text-gray-500 mb-8'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                
                <h2 className='text-xl font-medium text-gray-800 mb-2'>The StockX universe</h2>
                <p className='text-gray-500 mb-8'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>


                <h2 className='text-xl font-medium text-gray-800 mb-2'>Do better with money</h2>
                <p className='text-gray-500 mb-8'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className="text-center flex flex-col items-center p-4">
                <img src='media/images/ecosystem.png' alt='ecosystem' className="w-11/12 mb-6"/>
                <div className="flex gap-8">
                    <Link  className='text-blue-500 hover:text-blue-700 font-medium hover:underline'> Explore our products <i className="fa-solid fa-arrow-right"></i></Link>
                    <Link  className='text-blue-500 hover:text-blue-700 font-medium hover:underline'> Try kite demo <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center mt-12">
              <img src='media/images/pressLogos.png' alt='preetag' className="w-3/5" />
            </div>
        </div>
        </div>
     );
}

export default Stats;