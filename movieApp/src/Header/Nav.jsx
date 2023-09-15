import React, { useState } from 'react'
import Logo from '../assets/icons/Logo.png'
import {FaEquals, FaSearch, FaTimes, FaBars} from "react-icons/fa"
import './nav.scss'

export default function nav() {
  const [showNav, setShowNav] = useState(true)
  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
    
     <div className='navContainer'>
      <section className='logoSection'>
        <img src={Logo} alt="Logo" />
      </section>
      <section className='searchSection '>
        <input type="text" name="search" placeholder='What do you want to watch?' autoFocus/>
        <span><FaSearch/></span>
      </section>
      
  <section className={`menuSection ${showNav ? 'active' : ''}`}>
    <span>Sign in</span>
    <FaEquals className='img' />
  </section>

      
      <div className='mobile' onClick={handleToggleNav}>
          {showNav ? <FaBars  className='response'/> : <FaTimes className='response'/>}
        </div>
      </div> 
      
    </>
  )
}
