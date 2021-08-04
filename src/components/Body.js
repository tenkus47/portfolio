import React from 'react'
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import './style/Body.css'
function Body() {
    return (
        <div id='Home' className='homepage px-10 lg:px-20 flex  lg:flex-row flex-col justify-center pt-40 mb-10 lg:pt-40 lg:pb-20'>
            <div className='w-full  lg:px-20 lg:w-1/2'>
              <h1 className='font-bold text-3xl mb-5 lg:text-4xl text-center lg:text-left'  >Successful Front-end + Back-end Developer  
              <span className='text-blue-500 text-xl leading-8'>
               <br/>Hi. I’m  Kunsang 
                  </span> </h1>
               <p className='text-lg text-gray-600 mb-6 text-center lg:text-left' >
               a freelance Front-end cum Back-end Developer with experience in creating successful websites.</p>
               <div className='buttons flex-col text-center lg:text-left'>
                   <button className='button rounded-lg  text-white bg-red-500 m-2 text-sm py-2 px-2 hover:bg-red-600' type='button'>Get a Free Account</button>
                   <button type='button' className='p-2 button rounded-lg text-white bg-gray-600 m-2 text-sm px-3 hover:bg-gray-800' >Get Inspired</button>
               </div>
           
            </div>
            <div className='  w-1/2  lg:w-1/2 md:w-1/2  relative px-10 lg:px-20 hidden md:block '>
                <div className='relative'>
               <img className='' alt='homeimage' src='https://simplybook.me/build/images/main-page/main_mockup-admin.853ce357.png'/>
               <div className='play absolute'><PlayArrowSharpIcon className='playIcon' style={{fontSize:60}}/></div>
                </div>
               <img className='absolute top-1/3 w-1/3 border-2 rounded border-gray-300 h-100' alt='home2image' src='https://simplybook.me/build/images/main-page/Simply-gif2.a887b18c.gif'> 
                 </img>
               </div>

        </div>
    )
}
 
export default Body
