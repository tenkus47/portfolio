import React from 'react'

function Midpage() {

    const array=[{
       image:'https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/af241/feature__web.webp',
       title:'Front-end development',
       discription:'Responsive websites built for an optimal user experience that achieves your business goals.',
    },{
        image:'https://ianlunn.co.uk/static/54f14637ec376524313424344767614c/af241/feature__tools.webp',
        title:"Performance, SEO, & accessibility testing",
        discription:'Make your website fast, easy to find, and reach the widest audience possible.',
     },{
        image:'https://ianlunn.co.uk/static/fcaac44c20804fb66461aed9d410badd/af241/feature__wp.webp',
        title:'WordPress websites',
        discription:"Manage your website using the web's most popular content management system.",
     }];

    return (
        <div  className='midpage flex flex-col md:flex-row px-10 lg:px-20 pt-20 mb-20 md:mx-20 mr-20'>
            {array.map((item,id)=>(
   <div className='flex w-full flex-col mb-10 rounded p-3 md:w-1/2 lg:w-1/3 bg-gray-400 mx-10  items-center justify-center' key={id} >
       <img src={item.image} alt='imagefile' style={{width:100,objectFit:'contain'}}/>
       <h3 className='font-bold text-xl py-2 text-center'>{item.title}</h3>
       <h5 className='text-sm text-center text-lg leading-6'>{item.discription}</h5>
       </div>

            )
        )}
        </div>
    )
}

export default Midpage
