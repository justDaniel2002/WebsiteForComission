import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      </div>
    </>
  )
}

export default App
