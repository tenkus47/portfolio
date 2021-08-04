import React from 'react'

import {
    Link
  } from "react-router-dom";

function Signup() {
    return (
    <div class="py-20 h-screen bg-gray-300 px-2 pt-40">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
        <div class="md:flex">
            <div class="w-full p-3 px-6 py-10">
                <div class="text-center"> <span class="text-xl text-gray-700">Registration Form</span> </div>
                <div class="mt-3 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</span> <input type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                     </div>
                <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Last name</span> <input type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/> </div>
                <div class="mt-4"> <button class="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">Click to proceed <i class="fa fa-long-arrow-right"></i></button> </div>
                <div class="mt-4">
                    <Link to='/login'> <button class="h-12 w-full bg-blue-600 text-white rounded hover:bg-blue-700">Already have an Account! <i class="fa fa-long-arrow-right"></i></button> </Link></div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Signup