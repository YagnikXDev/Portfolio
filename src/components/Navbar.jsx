import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="flex items-center justify-center w-20 h-10 font-bold bg-white rounded-lg shadow-md">
            <p className='blue-gradient_text'>Home</p>
        </NavLink>
        <nav className='flex font-medium texxt-lg gap-7'>
            <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
                About
            </NavLink>
        </nav>
        <nav className='flex font-medium texxt-lg gap-7'>
            <NavLink to="/Contact" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
                Contact
            </NavLink>
        </nav>
       
    </header>
  )
}

export default Navbar
