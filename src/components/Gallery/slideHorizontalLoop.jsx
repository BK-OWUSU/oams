import React from 'react'

const slideHorizontalLoop = () => {
  return (
    <>
    <Swiper
                slidesPerView={1}
                spaceBetween={30}
  
                loop ={true}
                pagination = {{
                  clickable: true,
                }}
                navigation = {true}
                modules = {[Pagination, Navigation]}
                >
                  <SwiperSlide className='cubeSlide'><img src={IMG1} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='cubeSlide'><img src={IMG2} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='cubeSlide'><img src={IMG3} alt="cube" /></SwiperSlide>
                  <SwiperSlide className='cubeSlide'><img src={IMG4} alt="cube" /></SwiperSlide>
                </Swiper>
    </>
  )
}

export default slideHorizontalLoop