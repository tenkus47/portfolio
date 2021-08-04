import React,{useEffect, useState} from 'react'
import './style/Nav.css'
import flag from '../static/flag.png'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

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
            <div className='flex-1 font-bold uppercase text-center md:pb-0 '>
                     Tenzin Kunsang
            </div>
            <div className='Options cursor-pointer md:flex-grow hidden md:block '>
                <ul className='flex justify-end mr-20'>
                <li className='Contact'>
                      <ContactPhoneIcon className='mr-2'/>
                      Contact
                    </li>
                    <li className='item w-50'>
                      Log in
                    </li>
                    <li className='active item w-100'>
                      Sign up
                    </li>
                  
                     
                    <li className='translate'>
                       <img src={flag} alt='flag'/>
                      En
                    </li>
                    </ul>
            </div>       
              <div className={` md:hidden hiddenMenu bg-blue-300 flex flex-col justify-center items-center  ${classs}`} >
              <ClearIcon className='absolute top-4 left-4 font-bold cursor-pointer hover:text-red-500' onClick={()=>setOpen(false)}/>
             <h1 className='text-3xl font-bold hover:text-gray-200 cursor-pointer mr-8'>Contact me</h1>
             <br/>
             <p className='text-3xl font-bold hover:text-gray-200 cursor-pointer mr-4'>Log in</p>
             <br/>
             <p className='text-3xl font-bold hover:text-gray-200 cursor-pointer' >Register</p>

              </div>
         
        </div>
    )
}

export default Nav