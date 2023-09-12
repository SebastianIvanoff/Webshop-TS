import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to={'/'}><h1 className='title'>Fruits-TS</h1>
    </Link>  
    </nav>
       
  )
}

export default Navbar