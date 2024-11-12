import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Products4 = () => {
  return (
    <>
    <div style={{margin:'30px 0'}}>
    <h2 style={{textAlign:'center', marginBottom:'20px'}}> Trendsetting Outfits You’ll Love </h2>
    <div className='itemtyp'>
            <li>PRET 1PC</li>
            <li>PRET 2PC</li>
            <li>PRET 3PC</li>
            <li>SHAWLs</li>
            <li>UNSTITCHED 1PC</li>
            <li>UNSTITCHED 2PC</li>
            <li>UNSTITCHED 3PC</li>
    </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      breakpoints={{
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
       768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        
      }}
      >
        <SwiperSlide> 
                 <div className="item 1">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW407209_1_3c60ce09-f830-44d4-902c-be44c6f270ca.jpg?v=1728564601&width=540"/></div>
                             <div className="description">3PC- Digital Printed Grip Silk Suit PW4072</div>
                             <div className="price">Rs. 8,000</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 2">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW420201_2_760af2e8-47d7-4db2-b1f0-3f63997c0369.jpg?v=1730803579&width=540"/></div>
                             <div className="description">Black Winter Shawl PW4202</div>
                             <div className="price">Rs. 6,000</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 3">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW439712_8fab55ad-7912-4766-b37d-badd9f21e4b4.jpg?v=1726663963&width=540"/></div>
                             <div className="description">3 PC- Unstitched Digital Printed Bana Doriya Suit PW4397</div>
                             <div className="price">Rs. 6,960</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 4">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW413705_1_e6255fca-6038-4f88-810d-db704d281912.jpg?v=1728564567&width=540"/></div>
                             <div className="description">2PC- Solid Dyed Flannel Suit PW4137</div>
                             <div className="price">Rs. 7,960</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 5">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW411818_4_68707f9c-8683-4566-9381-6f3d11261f8f.jpg?v=1728564560&width=540"/></div>
                             <div className="description">2PC- Digital Printed Khaddar Suit PW4157</div>
                             <div className="price">Rs. 7,960</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 6">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW407920_1_a34f6f67-5ce2-4b8a-811f-c78143f47378.jpg?v=1728564550&width=720"/></div>
                             <div className="description">2PC- Digital Printed Khaddar Suit PW4157</div>
                             <div className="price">Rs. 7,960</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 7">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW422413_2_2ce2550f-bc6f-48eb-ad33-bd06afd9cee2.jpg?v=1730803686&width=540"/></div>
                             <div className="description">Red Winter Shawl PW4224</div>
                             <div className="price">Rs. 6,960</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide> 
                 <div className="item 8">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/files/PW407209_1_3c60ce09-f830-44d4-902c-be44c6f270ca.jpg?v=1728564601&width=540"/></div>
                             <div className="description">2PC- Digital Printed Khaddar Suit PW4157</div>
                             <div className="price">Rs. 5,960</div>
                 </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  )
}

export default Products4