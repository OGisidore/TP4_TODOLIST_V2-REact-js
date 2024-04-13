import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'


const App: React.FC = () => {
  return (
    <BrowserRouter>
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
