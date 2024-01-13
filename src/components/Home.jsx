import React from 'react'
import Navbar from './Navbar'
import '../css/Home.css'
import img from '../assets/slideimg1.jpeg'
import Series from './series'

export default function Home() {
  return (
    <div className='home'>
        <input type="image" src={img} className='p-absolute main-image' alt="" />
        <Navbar/>
    </div>
  )
}
