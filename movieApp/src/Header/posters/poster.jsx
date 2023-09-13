import React from 'react'
import './poster.scss'
import Image from '../../assets/posters/Poster.png'
import Nav from '../Nav'
import PosterInfo from './psoterInfo'

export default function poster() {
  return (
    <div className='posterContainer'>
      <Nav />
      <PosterInfo />
      <img src={Image} alt="john wick"/>
    </div>
  )
}
