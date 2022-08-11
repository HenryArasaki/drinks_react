import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styles from './style.module.css'


import Home from './pages/Home'
import Single from './pages/Single'


export default function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route path="/recipe/:id" element={<Single/>}/>
        

      </Routes>
    </BrowserRouter>
  )
}


