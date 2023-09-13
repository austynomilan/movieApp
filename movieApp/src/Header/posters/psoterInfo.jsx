import React from 'react';
import MovieCard from '../../assets/icons/movieCard.png';
import Fruit from '../../assets/icons/fruit.png';
import './posterInfo.scss'

export default function psoterInfo() {
  return (
    <div className='posterInfo_container'>
      <h1>
        John Wick 3 : <br /> Parabellum
      </h1>
      <section className='ugc'>
        <div className='branding'>
          <img src={MovieCard} alt='movie card' />
          <p>86.0/100</p>
        </div>
        <div className='userClicks'>
          <img src={Fruit} alt='likeness' />
          <p>97%</p>
        </div>
      </section>
      <section className='text_detail'>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
      </section>
      <button>WATCH TRAILER</button>
    </div>
  );
}
