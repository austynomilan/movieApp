import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegCopyright
} from 'react-icons/fa';
import './footer.scss'

export default function footer() {
  return (
  <>
    <section className="base">
        <div className="socials">
          <ul>
          <li><a href="#"><FaFacebookF /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a href="#"><FaYoutube /></a></li>
        </ul>
        </div>
        <div className="policies">
        <ul>
          <li><a href="#">Conditions of Use</a></li>
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">PressRoom</a></li>
        </ul>
        </div>
        
        <span>
            <FaRegCopyright /><p>2023 MovieBox by Augustine Odoh</p>
        </span>
      </section>
  </>
  );
}
