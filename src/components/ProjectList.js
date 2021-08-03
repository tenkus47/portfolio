import React from 'react'
import {list} from '../listOfProject'
function ProjectList() {
    return (
        <div className='Projectlist mt-20 w-full' >
            {list.map((item,index)=>(
                <div className='flex flex-col md:flex-row justify-between mb-20 w-full m-auto' key={index}>
                    <div className='w-90% flex-col mx-20 md:w-100 ' >
                       <img src={item.logo} className='rounded shadow-xl m-auto mb-20' alt='logo' />
                       <h2 className='text-blue-500 font-bold mt-4' > {'>'} {item.projectName}</h2>
                       <p className='text-gray-400 text-sm pl-4'>{item.date}</p>
                       
                        <p className='mt-2  w-full '>{item.discription}</p>
                    </div>
                        <div className='mx-20 mt-10 mb-10'>
                            <a href={item.link}>
                                <img src={item.screenShot2} alt='screenshot' className='shadow-lg'/>
                                </a>
                        </div>
                      <hr/>
                    </div>
            ))}
        </div>
    )
}

export default ProjectList
