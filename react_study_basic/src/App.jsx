import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './page/HomePage'
import UseState from './page/StudyPage/useState'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/useState" element={<UseState/>} />
      </Routes>
    </div>
  )
}

export default App
