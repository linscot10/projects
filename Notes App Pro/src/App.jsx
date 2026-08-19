import Home from "./Pages/Home"
import New_notes from "./Pages/New_notes"
import Profile from "./Pages/Profile"
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    < div className='flex '>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/New_notes" element={<New_notes/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/' element={<Profile/>}/>
    
    
     </Routes>
    </ div>
  )
}

export default App
