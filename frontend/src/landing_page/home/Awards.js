import React from 'react'

function Awards() {
    return ( 
       <div>
        <div className='container mx-auto mt-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='p-4'>
                    <img src='media/images/largestBroker.svg' className='w-full' alt='Brokertag' />
                </div>
                <div className='p-4'>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">Largest Broker Exchange in India</h1>
                    <p className="mb-12 text-gray-600">
                      2+ million StockX clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="flex justify-between mb-8">
            <div className="w-1/2">
              <ul className="list-disc ml-6 space-y-4 text-gray-600">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
              </div>
              <div className="w-1/2">
              <ul className="list-disc ml-6 space-y-4 text-gray-600">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
              </div>
              </div>
              <img  src='media/images/pressLogos.png' alt='preetag' className="ml-3.5 w-4/5 mt-4" />
                </div>
            </div>
        </div>
       </div>
     );
}

export default Awards;