import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
      <section className="w-full" id='supportwrapper'>
        <div className="max-w-6xl mx-auto p-4 md:p-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-4 sm:space-y-0" id='first'>
                <h3 className="text-2xl font-semibold">Support Portal</h3>
                <Link to="#" id='link' className="font-medium hover:underline">Track tickets</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl leading-relaxed">Search for an answer or browse help topics to create a ticket</h3>
                    <input className='w-full px-4 py-3 rounded border-0 shadow-sm focus:ring-2 focus:ring-blue-300 outline-none text-gray-800' id='input' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
                        <Link to="#" id='link-down' className="hover:underline">Track account opening</Link>
                        <Link to="#" id='link-down' className="hover:underline">Track segment activation</Link>
                        <Link to="#" id='link-down' className="hover:underline">Intraday margins</Link>
                        <Link to="#" id='link-down' className="hover:underline">Kite user manual</Link>
                    </div>
                </div>
                
                <div className="space-y-6 md:pl-10">
                    <h3 className="text-xl md:text-2xl font-semibold">Featured</h3>
                    <ol className="list-decimal ml-6 space-y-4">
                        <li id='ol'><Link to="#" id='li' className="hover:underline">MCX Option contracts expiry - April 2025</Link></li>
                        <li><Link to="#" id='li' className="hover:underline">MCX Base metals contract expiry - April 2025</Link></li>
                    </ol>
                </div>
            </div>
        </div>
      </section> 
    );
}

export default Hero;