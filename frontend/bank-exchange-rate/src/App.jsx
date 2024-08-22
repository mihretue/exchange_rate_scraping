import { react, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
