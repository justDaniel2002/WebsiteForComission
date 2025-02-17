import React from 'react'
import Navbar from '../components/Navbar'
import { navbarData } from '../datas/datas'

export default function Home() {
  return (
    <div>
      <Navbar iconLinks={navbarData}/>
    </div>
  )
}
