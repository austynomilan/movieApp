import React from 'react'
import Logo from '../assets/icons/Logo.png'
import {FaEquals, FaSearch} from "react-icons/fa"
import './nav.scss'

export default function nav() {
  return (
    <div className='navContainer'>
      <section className='logoSection'>
        <img src={Logo} alt="Logo" />
      </section>
      <section className='searchSection'>
        <input type="text" name="search" id="" placeholder='What do you want to watch?'/>
        <span><FaSearch/></span>
      </section>
      <section className='menuSection'>
        <span>Sign in</span>
        <FaEquals 
        className='img'
        />
      </section>
    </div>
  )
}
