import React from 'react'
import Navbar from '../components/Navbar'
import { navbarData } from '../datas/datas'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Navbar iconLinks={navbarData}/>
    </div>
  )
}
