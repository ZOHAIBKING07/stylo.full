import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Carousel2 = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920x600_3_00b19f0c-0677-49cd-a8fd-e2750fa17f73.jpg?v=1709980975" /></SwiperSlide>
      <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920X600_7_1d562326-5e2e-40ce-9e64-d2a11e88cbf5.jpg?v=1710220832" /></SwiperSlide>
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600-Kids.jpg?v=1719832680" /></SwiperSlide>
       
       
      </Swiper>
    </>
  )
}

export default Carousel2