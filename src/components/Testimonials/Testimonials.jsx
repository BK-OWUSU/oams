import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/oams/Teach-Acquah.jpg';
import IMG2 from '../../assets/oams/Teach-Ewrama.jpg';
import IMG3 from '../../assets/oams/Teach-Clement.jpg';
import IMG4 from '../../assets/oams/Teach-Silvia.jpg';
import IMG5 from '../../assets/prince.jpg';
import IMG6 from '../../assets/Ray.png';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
/* import 'swiper/css/navigation';
import 'swiper/css/scrollbar'; */

//DIMACALLY ARRAY DISPLAYING

const bkdata = [
  {
    avatar: IMG1,
    name: 'Akwesi Acquah',
    reviews: 'My Daughter is always happy to go school and and full of smiles when i pick her up. I attribute to the exemplary teaching and community feel of the school.' 
  },
  
  {
    avatar: IMG2,
    name: 'Ewurama Aikins',
    reviews: 'Fantastic school! The teachers are Professional, caring and well organized. The admission process was outstanding, they really care and truly want the best for your child.' 
  },

  {
    avatar: IMG3,
    name: 'Clement',
    reviews: 'Ofosu Amoako has helped me raise my children. They are very happy to gp to school every day. The teachers are really good and dedicated, I will always be grateful to this wonderful school.' 
  },

  {
    avatar: IMG4,
    name: 'Silvia',
    reviews: 'This school brings out the best in every dchild by tapping into their individual strenths, whil creating an environment of kindness, responsibility and leadership.' 
  },

  {
    avatar: IMG5,
    name: 'Boadi Prince',
    reviews: 'If you want to give your children a stellar education while they are nurtured to be their best, most confident selves, then i encourage you to seek Ofosu Amoako Memorial school.' 
  },

  {
    avatar: IMG6,
    name: 'Raymond Bentil',
    reviews: 'The teachers and staff are super sweet, amazing, caring and God-fearing. I will never worry about my children while they under their care and guidance.' 
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2 className="fade-in">Testiomial</h2>
      <Swiper className="container testiomial_container"
      // install Swiper modules
      modules={[Pagination]}
      autoplay = {true}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      > 
        {
          bkdata.map(({avatar, name, reviews}, index)=> {
            return (
        <SwiperSlide className='testimonials_content' key={index}>
            <div className="client_avatar">
            <img src={avatar} alt="Client Avatar" />
            </div>
            <h5>{name}</h5>
            <small className='review'>{reviews}</small>
        </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials