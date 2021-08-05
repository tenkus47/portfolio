import React from 'react'

import {
    Link
  } from "react-router-dom";

function Signup() {
    return (
    <div className="py-10 h-screen bg-white px-2 pt-20 ">
    <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-md">
        <div className="md:flex">
            <div className="w-full p-3 px-6 py-10">
                <div className="text-center"> <span className="text-xl text-gray-700">Registration Form</span> </div>
                <div className="mt-3 relative"> <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                     </div>
                <div className="mt-4 relative"> <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Last name</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div className="mt-4 relative"> <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div className="mt-4 relative"> <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div className="mt-4"> <button className="h-10 w-full bg-red-600 text-white rounded hover:bg-red-700">Register <i className="fa fa-long-arrow-right"></i></button> </div>
                <div className="mt-4">
                    <Link to='/login'> <button className="h-10 w-full bg-blue-600 text-white rounded hover:bg-blue-700">Already have an Account! <i className="fa fa-long-arrow-right"></i></button> </Link></div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Signup
