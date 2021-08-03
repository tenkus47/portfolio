import React from 'react'
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import './style/Body.css'
function Body() {
    return (
        <div id='Home' className='homepage px-10 lg:px-20 flex  lg:flex-row flex-col justify-center pt-40 mb-20 '>
            <div className='w-full px-10 lg:px-20 lg:w-1/2'>
              <h1 className='font-bold text-4xl mb-5'>Successful Front-end + Back-end Development  
              <span className='text-blue-500 text-xl leading-8'>
               <br/>Hi. I’m  Kunsang 
                  </span> </h1>
               <p className='text-lg text-gray-600 mb-6 ' >
               a freelance Front-end cum Back-end Developer with experience in creating successful websites.</p>
               <div className='buttons flex'>
                   <button className='button rounded-lg  text-white bg-red-500 m-2 text-sm py-2 px-2' type='button'>Get a Free Account</button>
                   <button type='button' className='button rounded-lg text-white bg-black m-2 text-sm px-3 ' >Get Inspired</button>
               </div>
               <div className='store-button flex'>
               <button className='app-btn rounded text-gray-500 border-gray-400 p-1 m-2 border-2 hover:text-black hover:border-black' type='button'>App Store</button>
                   <button type='button' className='app-btn rounded text-gray-500 border-gray-400 p-1 m-2 border-2 hover:text-black hover:border-black' >Google Play</button>
                
                       </div>
            </div>
            <div className='  w-1/2  lg:w-1/2 md:w-1/2  relative px-10 lg:px-20 hidden md:block '>
                <div className='relative'>
               <img className='' alt='homeimage' src='https://simplybook.me/build/images/main-page/main_mockup-admin.853ce357.png'/>
               <div className='play absolute'><PlayArrowSharpIcon className='playIcon' style={{fontSize:60}}/></div>
                </div>
               <img className='absolute top-1/3 w-1/3 border-2 border-gray-200 h-1/2' alt='home2image' src='https://simplybook.me/build/images/main-page/Simply-gif2.a887b18c.gif'> 
                 </img>
               </div>

        </div>
    )
}
 
export default Body
