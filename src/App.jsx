import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import NewsBoard from './pages/NewsBoard'



function App() {
const [category,setCategory]=useState("general")
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category = {category} />
    </>
  )
}

export default App
