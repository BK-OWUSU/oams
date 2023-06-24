import React from 'react';
import './gallery.css';

import IMG1 from '../../assets/oams/img (26).jpg';
import IMG2 from '../../assets/oams/img (35).jpg';
import IMG3 from '../../assets/oams/img (33).jpg';
import IMG4 from '../../assets/oams/img (36).jpg';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-cards';

//Required Models
import { EffectCards} from 'swiper';

const slideCards = () => {
  return (
        <>
            <Swiper className = 'slideCard'
                effect = {'cards'}
                grabCursor = {true}
                modules = {[EffectCards]}
                >
                  <SwiperSlide><img src={IMG1} alt="cube" /></SwiperSlide>
                  <SwiperSlide><img src={IMG2} alt="cube" /></SwiperSlide>
                  <SwiperSlide><img src={IMG3} alt="cube" /></SwiperSlide>
                  <SwiperSlide><img src={IMG4} alt="cube" /></SwiperSlide>
            </Swiper>
        </>
  )
}

export default slideCards