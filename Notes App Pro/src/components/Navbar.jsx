import React, { useState } from 'react'
import {Link, useLocation} from "react-router-dom"


const Navbar = () => {
  const location =useLocation()
  return (
    <div>
        <nav className=" flex flex-col gap-4 bg-gray-400 w-48 h-screen">
            <div className='p-4'><h1 className='font-bold text-gray-600 text-xl'><span className='text-green-600'>NOTEFLOW</span>-<span>PRO</span></h1></div>
            <div className='flex flex-col gap-3 justify-center text-lg p-4'>
          <ul className="flex flex-col gap-2  w-40 " >
          <Link  to={'/New_notes'} className={location.pathname==='/New_notes'? "bg-white rounded-lg w-48":"bg-gray-400"}> <li className='hover:bg-white rounded-lg p-2  w-48 '>+ New Note </li>
</Link>
               <Link  to={'/Search'} className={location.pathname==='/Search'? "bg-white rounded-lg w-48":"bg-gray-400"}> <li className='hover:bg-white rounded-lg p-2 w-48'>Search</li></Link> 
                
                
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-5 " >
            <Link  to={'/'} className={location.pathname==='/'? "bg-white rounded-lg  w-48" : "bg-gray-400"}><li className='hover:bg-white rounded-lg p-2  w-48 '>Home</li> </Link> 
                 <Link  to={'/My_Notes'} className={location.pathname==='/My_Notes'? "bg-white rounded-lg w-48":"bg-gray-400"}> <li className='hover:bg-white rounded-lg p-2 w-48'>  My Notes</li></Link>
               <Link  to={'/Todos'} className={location.pathname==='/Todos'? "bg-white rounded-lg w-48":"bg-gray-400"}><li className='hover:bg-white rounded-lg p-2 w-48 '>Todos </li></Link>
               <Link  to={'/Favorites'} className={location.pathname==='/Favorites'? "bg-white rounded-lg w-48":"bg-gray-400"}> <li className='hover:bg-white rounded-lg p-2 w-48 '>Favorites </li></Link> 
                
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-10" >
                 <Link  to={'/Dark_Mode'} className={location.pathname==='/Dark_Mode'? "bg-white rounded-lg w-48":"bg-gray-400"}>  <li className='hover:bg-white rounded-lg p-2 w-48 '>Dark Mode  </li></Link>
              <Link  to={'/Setting'} className={location.pathname==='/Setting'? "bg-white rounded-lg w-48":"bg-gray-400"}> <li className='hover:bg-white rounded-lg p-2 w-48 '>Setting </li> </Link>
               <Link  to={'/Profile'} className={location.pathname==='/Profile'? "bg-white rounded-lg w-48":"bg-gray-400"}><li className='hover:bg-white rounded-lg p-2 w-48 '> Profile </li> </Link>
                
            </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar