import React, { useEffect, useState } from 'react'

import {Link} from "react-router-dom"

const Home = () => {
const list={
  Notes:30,
  Categories:39,
  Favorites:30,
  Todos:32
}

 const getTimeOfDay=(hour)=>{
  if(hour>=5 && hour <12) return 'MORNING';
  if(hour>=12 && hour <17) return 'AFTERNOON';
  if(hour>=17 && hour <21) return 'EVENING';
  return "NIGHT"
 }

 const getCurrentTime=()=>{
  return getTimeOfDay(new Date().getHours())

 }

 const [timeOfDay, setTimeOfDay]=useState( getCurrentTime);

 useEffect(()=>{
  const interval=setInterval(()=>{
    setTimeOfDay(getCurrentTime)
  }, 60000);
  return ()=> clearInterval(interval)
 },[])

//   const getTimeOfDay=(hour)=>{
//     if(hour>=5 && hour<12) return "MORNING";
//     if(hour>=12 && hour<17) return "AFTERNOON";
//     if(hour>=17 && hour<21) return "EVENING";
//     // if(hour>=5 && hour<12) return "MORNING";
//     return "NIGHT"

//   }

//   const [timeOfDay, setTimeOfDay]=useState(()=>{
//     return getTimeOfDay(new Date().getHours())
//   })

//   useEffect(()=>{
// const interval=setInterval(()=>{
//   setTimeOfDay(getTimeOfDay(new Date().getHours()))
// }, 60000);
// return () =>clearInterval(interval)

//   },[])
  return (
    <div className='w-full bg-slate-50 ml-48'>
    <h1 className='flex justify-center text-xl m-4'>GOOD {timeOfDay},  SCOTT!</h1>
    <h2 className='flex justify-center text-lg m-4'>Welcome Back! Here's Your Workspace.</h2>

    <div className='flex gap-10  p-6 justify-center items-center'>
        <Link to={'New_notes'} className='text-xl text-gray-800 rounded-lg w-48 hover:bg-gray-100  p-2 mr-40'>+ New Note </Link>

          <label className='flex h-8 justify-center items-center gap-4'><input type='search'className='bg-white rounded-lg w-64 px-3 h-8' placeholder='search your notes..'/></label>
    </div>
    <div className='grid grid-cols-3 justify-center  m-4 p-4 '>
      {/* <div className='bg-red-400 w-48 rounded-lg h-24 flex flex-col justify-center items-center'><p>42</p><h1>Notes</h1></div>
      <div className='bg-red-400 w-48 rounded-lg h-24 flex flex-col justify-center items-center'><p>42</p><h1>categories</h1></div>
      <div className='bg-red-400 w-48 rounded-lg h-24 flex flex-col justify-center items-center'><p>42</p><h1>Todos</h1></div>
      <div className='bg-red-400 w-48 rounded-lg h-24 flex flex-col justify-center items-center'><p>42</p><h1>favorite</h1></div> */}

      {Object.entries(list).map(([type, num])=> <div className='bg-white w-48 shadow-lg rounded-lg h-28 flex flex-col justify-center items-center  text-gray-700 text-xl m-3'><p className='text-2xl p-3 '>{num}</p ><h1>{type}</h1></div>)}
     
    </div>

    </div>
  )
}

export default Home