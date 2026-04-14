import React from 'react'
import { Link }from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <nav className="bg-white border-b pt-3 h-[12vh] border-gray-200 sticky top-0 z-50" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link className="flex items-center" to={"/"} >
              <img src='media/images/logo.svg' alt="logo" className="h-6 w-auto sm:h-8" />
            </Link>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default ForgetPassword
