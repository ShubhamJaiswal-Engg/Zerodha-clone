import React from 'react'
import { Link } from 'react-router-dom';

function LeftSection({imageURL,tryDemo,googlePlay,appStore,learnMore,productDescription,ProductName}) {
    return ( <div className="container mx-auto p-4 md:p-12 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center p-4">
                <img alt='hero' src={imageURL} className="w-4/5 md:w-full" />
            </div>
            <div className="p-4 md:p-10 space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">{ProductName}</h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{productDescription}</p>
                <div className='flex gap-8'>
                    <Link to={"#"} className="text-blue-500 hover:text-blue-700 font-medium hover:underline" >{tryDemo} <i className="fa-solid fa-arrow-right"></i></Link>
                    <Link to={"#"} className="text-blue-500 hover:text-blue-700 font-medium hover:underline" >{learnMore} <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="flex gap-4 mt-4">
                    <img alt='logo' className="h-10 cursor-pointer" src={googlePlay} />
                    <img alt='logo' className="h-10 cursor-pointer" src={appStore} />

                </div>
            </div>
        </div>
    </div> );
}

export default LeftSection;