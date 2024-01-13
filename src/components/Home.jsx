import React from 'react'
import Navbar from './Navbar'
import '../css/Home.css'
import img from '../assets/slideimg1.jpeg'
import Series from '../components/series'

export default function Home() {
  return (
    <>
    <div className='home'>
        <Navbar/>
        <input type="image" src={img} className='main-image' alt="" />
    </div>
    <Series/>
    </>
  )
}
