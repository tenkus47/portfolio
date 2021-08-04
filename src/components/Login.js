import React from 'react'

import {
    Link
  } from "react-router-dom";

function Login() {
    return (
<div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200 ">
  <div class="content text-3xl text-center md:text-left md:ml-40">
    <h1 class="text-5xl text-blue-500 font-bold mb-10">Stay in Contact</h1>
    <p>Please support and keep connected to us</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
    <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <input type="text" placeholder="Email or Phone Number" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a class="text-blue-400 text-center my-2" href="/">Forgot Pasword?</a>
      <hr />
         <Link to='/signup'> <button class="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg hover:bg-green-500">Create New Account</button></Link>
    </form>
    <p class="text-center text-sm my-4">
      <span class="font-semibold text-center w-full">
          Create a Page</span> for a celebrity, band or business
    </p>
  </div>
</div>
    )
}
export default Login