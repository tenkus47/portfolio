import React,{useEffect, useState} from 'react'
import './style/Nav.css'
import flag from '../static/flag.png'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import profileImage from '../static/myInfo/profile.jpg'

import {
  Link
} from "react-router-dom";

function Nav() {
  const [open,setOpen]=useState(false)
  const [classs ,setClass] =useState('activemenu')
  useEffect(()=>{
    if(open===false)
    setClass('inactivemenu')
    else{
      setClass('activemenu')
    }
  },[open])
    return (
        <div className='Navbar flex flex-row items-center'>
          <div className=' md:hidden cursor-pointer' onClick={()=>setOpen(true)}>
               <MenuIcon/>
            </div>
            <Link to='/portfolio'> <div className='flex items-center font-bold uppercase text-center md:pb-0 lg:ml-20 '>
               <img src={profileImage} alt='profile' className='mr-5 rounded-full h-10 w-10 object-cover ml-10'/>
                   Tenzin Kunsang
            </div></Link> 
            <div className='Options cursor-pointer md:flex-grow hidden md:block '>
                <ul className='flex justify-end mr-20'>
                
                    <li className='item w-50'>
                    <Link to="/login">    Log in</Link>
                    </li>
                    <li className='active item w-100'>
                    <Link to="/signup">  Sign up</Link>
                    </li>
                  
                     
                    <li className='translate'>
                       <img src={flag} alt='flag'/>
                      En
                    </li>

                    <Link to="/contact">   <li className='Contact font-bold mr-2'>
                 <ContactPhoneIcon className='mr-2' style={{fontSize:15}}/>
                     Contact
                    </li></Link>
                    </ul>
            </div>       
              <div className={` md:hidden hiddenMenu bg-blue-300 flex flex-col justify-center items-center  ${classs}`} >
              <ClearIcon className='absolute top-4 left-4 font-bold cursor-pointer hover:text-red-500' onClick={()=>setOpen(false)}/>
             <h1 className='text-3xl font-bold hover:text-gray-200 cursor-pointer mr-8'>
             <Link to="/contact"> Contact</Link>
               </h1>
             <br/>
             <p className='text-3xl font-bold hover:text-gray-200 cursor-pointer mr-4'>
             <Link to="/login">    Log in</Link>
               </p>
             <br/>
             <p className='text-3xl font-bold hover:text-gray-200 cursor-pointer' >
             <Link to="/signup">  Sign up</Link>
               </p>

              </div>
         
        </div>
    )
}

export default Nav