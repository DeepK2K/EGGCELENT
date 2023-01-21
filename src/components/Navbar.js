import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ({toggle}) => {
  return (
    <nav className='flex justify-between item-center bg-white 
    text-black relative shadow-sm font-mono' role='navigation'>


      <Link to={'/'} className='pl-8'>EGG</Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link to={"/"} className="p-4 hover:font-extrabold">Home</Link>
        <Link to={"/menu"} className="p-4 hover:font-extrabold">Menu</Link>
        <Link to={"/about"} className="p-4 hover:font-extrabold">About</Link>
        <Link to={"/contact"} className="p-4 hover:font-extrabold">Contact</Link>

      </div>


    </nav>

  )
}

export default Navbar
