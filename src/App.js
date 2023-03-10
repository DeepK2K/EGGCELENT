
import './App.css';
import Navbar from './components/Navbar';
import React,{useState,useEffect}from 'react';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize',hideMenu)
    return()=>{
      window.removeEventListener('resize',hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
