import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
      <div>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
