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
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Required Models
import {Pagination, Navigation} from 'swiper';

const Gallery = () => {
  return (
    <section className="gallery" id='gallery'>
      <h2>Gallery</h2>
      {/* InfiniteLoops */}
      <Swiper className="container gallery_container"
                slidesPerView={1}
                spaceBetween={30}
                loop ={true}
                pagination = {{
                  clickable: true,
                }}
                navigation = {true}
                modules = {[Pagination, Navigation]}
                >
                  <SwiperSlide className='horizontalSlide'><img src={IMG1} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='horizontalSlide'><img src={IMG2} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='horizontalSlide'><img src={IMG3} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='horizontalSlide'><img src={IMG4} alt="cube" /></SwiperSlide>
                </Swiper>
    </section>
  )
}

export default Gallery