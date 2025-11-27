import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './page/HomePage'


function App() {


  return (

    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
