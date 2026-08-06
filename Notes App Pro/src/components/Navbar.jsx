import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=" flex flex-col gap-4 bg-gray-400 w-48 h-screen">
            <div className='p-4'><h1 className='font-bold text-gray-600 text-xl'><span className='text-green-600'>NOTEFLOW</span>-<span>PRO</span></h1></div>
            <div className='flex flex-col gap-3 justify-center text-lg p-4'>
          <ul className="flex flex-col gap-2  w-40 " >
                 <li className='hover:bg-white rounded-lg p-2  w-48 '> + New Note</li>
                <li className='hover:bg-white rounded-lg p-2 w-48'> Search</li>
                
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-5 " >
                 <li className='hover:bg-white rounded-lg p-2  w-48 '> Home</li>
                <li className='hover:bg-white rounded-lg p-2 w-48'> My Notes</li>
                <li className='hover:bg-white rounded-lg p-2 w-48 '>Todos</li>
                <li className='hover:bg-white rounded-lg p-2 w-48 '>Favorites</li>
                
            </ul>
            <ul className="flex flex-col gap-2  w-40 mt-10" >
                 
                <li className='hover:bg-white rounded-lg p-2 w-48 '>Dark Mode</li>
                <li className='hover:bg-white rounded-lg p-2 w-48 '> Setting</li>
                <li className='hover:bg-white rounded-lg p-2 w-48 '> Profile</li>
            </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar