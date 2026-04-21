import React from 'react'

function Hero() {
    return (
      <div className="container mx-auto p-4 md:p-12 mb-12">
        <div className="flex flex-col items-center mt-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4 text-center">Charges</h1>
          <h4 className="text-xl text-gray-500 text-center">
            List of all charges and taxes
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 items-start">
          <div className="flex flex-col items-center text-center">
            <img className="w-3/5 mb-8" src='media/images/pricing0.svg' alt="Free equity delivery" />
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Free equity delivery</h2>
            <p className="text-gray-600 leading-relaxed">All equity delivery investments (NSE, BSE),<br className="hidden lg:block"/> are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="w-3/5 mb-8" src='media/images/intradayTrades.svg' alt="Intraday trades" />
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Intraday and F&O trades</h2>
            <p className="text-gray-600 leading-relaxed">Flat ₹ 20 or 0.03% (whichever is lower) per <br className="hidden lg:block"/> executed order on intraday trades across<br className="hidden lg:block"/>  equity, currency, and commodity trades. Flat<br className="hidden lg:block"/>  ₹20 on all option trades.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="w-3/5 mb-8" src='media/images/pricing0.svg' alt="Free direct MF" />
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Free direct MF</h2>
            <p className="text-gray-600 leading-relaxed">All direct mutual fund investments are<br className="hidden lg:block"/>  absolutely free — ₹ 0 commissions & DP<br className="hidden lg:block"/>  charges.</p>
          </div>
        </div>
      </div> 
    );
}

export default Hero;