import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import FeedbackDashboard from './components/FeedbackDashboard'
import Main from './components/Main'
import AddFeedback from './components/Addfeedback'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
       <Route path='/n' element={<Navbar/>}/>
       <Route path='/dash' element={<Main child={<FeedbackDashboard/>}/>}/>
       <Route path='/form' element={<Main child={<AddFeedback/>}/>}/> 
       
       <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
