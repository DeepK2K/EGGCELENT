import React from 'react'
import {Link} from "react-router-dom"
const Dropdown = ({isOpen,toggle}) => {
  return (
    <div className={isOpen ?'grid grid-rows-4 text-center items-center bg-yellow-400':'hidden'}
    onClick={toggle}>
      <Link to={"/"} className="p-4 hover:bg-yellow-300 hover:font-bold">Home</Link>
        <Link  to={"/menu"} className="p-4 hover:bg-yellow-300 hover:font-bold">Menu</Link>
        <Link to={"/about"} className="p-4 hover:bg-yellow-300 hover:font-bold">About</Link>
        <Link to={"/contact"} className="p-4 hover:bg-yellow-300 hover:font-bold">Contact</Link>
    </div>
  )
}

export default Dropdown
