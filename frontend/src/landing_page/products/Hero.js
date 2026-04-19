import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( <div className="container mx-auto p-4 md:p-12">
        <div className="flex flex-col items-center mt-12 mb-8 border-b border-gray-200 pb-16 max-w-5xl mx-auto">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">StockX Products</h1>
                <h4 className="text-xl text-gray-600 mb-6">Sleek, modern, and intuitive trading platforms</h4>
                <p className="text-gray-600">Check out our
              <Link to={"#"} className="text-blue-500 hover:text-blue-700 font-medium hover:underline ml-1"> investment offerings <i className="fa-solid fa-arrow-right"></i></Link>
              </p>
            </div>
        </div>
    </div> );
}

export default Hero;