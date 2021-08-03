import React,{useState} from 'react'
import './style/sidebar.css'
import {sidelist} from '../listOfProject'



function Sidebar() {

    const [active,setActive]=useState(0);
    document.addEventListener('scroll',(e)=>{
     if(window.scrollY>=565){
         if(window.scrollY>1244){
             setActive(2)
         }
         else{
         setActive(1) 
        };
     }
     else{
         setActive(0)
     }
    })

    return (
        <div className='sidebar'>
        {sidelist.map((item)=>(
              <div className='rounded-full icons w-30 h-30 mb-5 ' key={item.id}>
                  <a href={`#${item.name}`}>
                  <item.icon className={active===item.id ? ('active') : ('hover:bg-blue-300')}/>
                  </a>
              </div>
        ))}
        </div>
    )
}

export default Sidebar
