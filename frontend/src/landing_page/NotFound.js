import React from 'react'
function NotFound() {
    return (  <div className='container mx-auto p-12 mb-12 flex flex-col items-center text-center'>
            <h1 className='mt-12 mb-6 text-4xl font-semibold text-gray-800'>404! Not Found</h1>
            <p className="text-xl text-gray-600">sorry, the page you are looking for does not exist</p>
        </div>);
}

export default NotFound;