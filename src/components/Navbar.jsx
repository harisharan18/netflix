import React from 'react'
import '../css/Navbar.css'
import Search from './Search'

export default function Navbar() {
  return (
    <div className='navbar display-flex align-center'>
        <ul className='nav-list'>
            <li className='nav-item cursor-pointer'>Home</li>
            <li className='nav-item cursor-pointer'>TV Shows</li>
            <li className='nav-item cursor-pointer'>Movies</li>
        </ul>
        <div className="my-list display-flex align-center">
        <Search/>
          <li className='nav-item cursor-pointer'>My List</li>
        </div>
    </div>
  )
}
