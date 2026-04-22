import React from 'react'
import { Link } from 'react-router-dom';

function RightSection({imageURL,tryDemo,googlePlay,appStore,learnMore,productDescription,ProductName}) {
    return (<div className="container mx-auto p-4 md:p-12 mb-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 p-4 md:p-10 space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">{ProductName}</h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{productDescription}</p>
                <div>
                    <Link to={"#"} className="text-blue-500 hover:text-blue-700 font-medium hover:underline" >{learnMore} <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            
            </div>
            <div className="w-full md:w-1/2 flex justify-center px-4">
                <img alt='hero' className="w-4/5 md:w-full" src={imageURL} />
            </div>
        </div>
    </div> );
}

export default RightSection;