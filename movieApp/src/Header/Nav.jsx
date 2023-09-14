import React, { useState } from 'react'
import Logo from '../assets/icons/Logo.png'
import {FaEquals, FaSearch, FaTimes, FaBars} from "react-icons/fa"
import './nav.scss'

export default function nav() {
  const [showNav, setShowNav] = useState(false)
  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
    
     <div className='navContainer'>
      <section className='logoSection'>
        <img src={Logo} alt="Logo" />
      </section>
      <section className='searchSection'>
        <input type="text" name="search" id="" placeholder='What do you want to watch?'/>
        <span><FaSearch/></span>
      </section>
      {showNav &&
        <section className='menuSection'>
        <span>Sign in</span>
        <FaEquals 
        className='img'
        />
      </section>
      }
      
      <div className='mobile' onClick={handleToggleNav}>
          {showNav ? <FaTimes className='response'/> : <FaBars className='response'/>}
        </div>
      </div> 
      
    </>
  )
}
