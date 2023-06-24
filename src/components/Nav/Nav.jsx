import React, {useState} from "react";
import './nav.css';
import LOGO from '../../assets/badge3-transparent.png';
import {BiHome} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';



const Nav = () => {
  const [activeBtn, setBtn] = useState('#home');
  return(
    <nav>
      <div className="container nav_container">
        <a href="#home"><img src={LOGO} className="logo" alt="OAMS LOGO" /></a>
        <ul className="nav_menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav_buttons">
          <a href="#home" onClick={()=> setBtn('#home')} className={activeBtn === '#home'? 'active':''}><BiHome/></a>
          <a href="#about" onClick={()=> setBtn('#about')} className={activeBtn === '#about'?'active':''}><BiBook/></a>
          <a href="#footer" onClick={()=> setBtn('#footer')} className={activeBtn === '#footer'?'active':''}><RiServiceLine/></a>
          <a href="#contact" onClick={()=> setBtn('#contact')} className={activeBtn === '#contact'?'active':''}><BiMessageSquareDetail/></a>
        </div>
        </div>
    </nav>
  )
} 

export default Nav;