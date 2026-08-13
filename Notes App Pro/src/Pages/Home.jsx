import React, { useEffect, useState } from 'react'

// import {Link} from "react-router-dom"

const Home = () => {
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
    <div className='w-full bg-amber-200'>
    <h1 className='flex justify-center text-xl m-4'>GOOD {timeOfDay},  SCOTT!</h1>
    <h2 className='flex justify-center text-lg m-4'>Welcome Back! Here's Your Workspace.</h2>

    </div>
  )
}

export default Home