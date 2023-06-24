import React from 'react';
import './header.css';
import './headerSlide.css';

import IMG1 from '../../assets/oams/colorday (7).png';
import IMG2 from '../../assets/oams/colorday (2).png';
import IMG3 from '../../assets/oams/colorday (6).png';
import IMG4 from '../../assets/oams/colorday (10).png';
// Array of content 

/* const sliderContent = [
  {
    id: 1,
    img: {IMG1}
  },

  {
    id: 2,
    img: {IMG2}
  },

  {
    id: 3,
    img: {IMG3}
  },

  {
    id: 4,
    img: {IMG4}
  },

  {
    id: 5,
    img: {IMG5}
  },
]
 */
const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <div className="sliderbox">
         <div className="slider">
           {/*  <!--Buttons for images slides--> */}
            <input type="radio" name="radio-btn" id="radio1" checked />
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
           {/*  <!--End-->
            <!--Images for slides--> */}
            <div className="slide selected"><img src={IMG1} alt='pic-1'/></div>
            <div className="slide"><img src={IMG2} alt='pic-2'/></div>
            <div className="slide"><img src={IMG3} alt='pic-3'/></div>
            <div className="slide"><img src={IMG4} alt='pic-4'/></div>
          </div>
          
       
    </div>   

      </div>
        <div className="header_content">
              <h2 id='welcome'>Ofosu Amoako Memorial School</h2>
              <div className="header_info_container">
              <p className='header_info text_fade'>
              
              </p>
              </div>
              <div className="header_links">
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                <a href="#about" className='btn'>More About Us</a>
              </div>
        </div>
      
    </header>  
  )
}

export default Header