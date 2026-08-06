import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    < div className='flex '>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/' element={<Profile/>}/>
    
    
     </Routes>
    </ div>
  )
}

export default App
