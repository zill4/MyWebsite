import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { TopNav } from './Components/Navigation/TopNav'
import { About } from './Pages/About'
import { Home } from './Pages/Home'

function App() {
  return (
    <div className="">
      {/* <TopNav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
