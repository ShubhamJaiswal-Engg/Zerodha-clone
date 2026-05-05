import { Link } from 'react-router-dom'
import React from 'react'

function Team() {
    return ( 
    <div className="container mx-auto p-4 md:p-12 mb-12">
        <h1 className='text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10'>People</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto items-center">
            <div className='text-center'>
                <img className="rounded-full w-3/5 mx-auto" src='media/images/nithinKamath.jpg' alt="Nithin Kamath" />
                <h5 className="text-xl font-medium text-gray-800 mt-6 mb-2">Nithin Kamath</h5>
                <h6 className="text-gray-500">Founder, CEO</h6>
            </div>
            <div className="text-gray-600 text-base md:text-lg space-y-6">
                <p>Nithin bootstrapped and founded StockX in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, StockX has changed the landscape of the Indian broking industry.</p>

                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>

                <p>Connect on <Link to="#" className="text-blue-500 hover:underline">HomePage</Link> / <Link to="#" className="text-blue-500 hover:underline">TradingQnA</Link> / <Link to="#" className="text-blue-500 hover:underline">Twitter</Link></p>
            </div>
        </div>
    </div>
    );
}

export default Team;