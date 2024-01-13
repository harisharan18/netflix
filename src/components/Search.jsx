import React from 'react'
import '../css/Search.css'
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className='search display-flex align-center'>
       <input type="text" name="search" className='search-bar' id="search" placeholder='Search..' />
       <IoIosSearch className='cursor-pointer'/>
    </div>
  )
}
