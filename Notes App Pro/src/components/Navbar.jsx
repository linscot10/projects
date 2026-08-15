import React, { useState } from 'react'
import {Link, useLocation} from "react-router-dom"


const Navbar = () => {
  const location =useLocation()
  return (
    
    <div className=''>
        <nav className=" fixed top-0 left-0  flex flex-col gap-4 bg-gray-900 w-48 h-screen">
            <div className='p-4'><h1 className='font-bold text-gray-600 text-xl'><span className='text-green-600'>NOTEFLOW</span>-<span>PRO</span></h1></div>
            <div className='flex flex-col gap-3 justify-center text-lg p-4'>
          <ul className="flex flex-col gap-2  w-40 " >
          <Link  to={'/New_notes'} className={location.pathname==='/New_notes'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}> <li className='hover:bg-white hover:text-black rounded-l-lg p-2  w-44 '>+ New Note </li>
</Link>
               <Link  to={'/Search'} className={location.pathname==='/Search'? " text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}> <li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44'>Search</li></Link> 
                
                
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-5 " >
            <Link  to={'/'} className={location.pathname==='/'? "bg-white text-black rounded-l-lg  w-44" : "text-white rounded-l-lg w-44 rounded-l-lg w-44"}><li className='hover:bg-white hover:text-black rounded-l-lg p-2  w-44 '>Home</li> </Link> 
                 <Link  to={'/My_Notes'} className={location.pathname==='/My_Notes'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}> <li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44'>  My Notes</li></Link>
               <Link  to={'/Todos'} className={location.pathname==='/Todos'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}><li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44 '>Todos </li></Link>
               <Link  to={'/Favorites'} className={location.pathname==='/Favorites'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}> <li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44 '>Favorites </li></Link> 
                
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-10" >
                 <Link  to={'/Dark_Mode'} className={location.pathname==='/Dark_Mode'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}>  <li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44 '>Dark Mode  </li></Link>
              <Link  to={'/Setting'} className={location.pathname==='/Setting'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}> <li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44 '>Setting </li> </Link>
               <Link  to={'/Profile'} className={location.pathname==='/Profile'? "bg-white text-black rounded-l-lg w-44":"text-white rounded-l-lg w-44"}><li className='hover:bg-white hover:text-black rounded-l-lg p-2 w-44 '> Profile </li> </Link>
                
            </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar