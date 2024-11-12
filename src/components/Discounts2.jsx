// Discounts2Content.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Discounts2 = () => (
    
  <>
  {/* <h2 style={{textAlign:'center', marginBottom:'20px'}}>Best Discount</h2>
    <div className="swiper-slide">
      <div className="item">
        <div className="pic" style={{
          width: '150px', height: '200px', overflow: 'hidden', borderRadius: '70%',
          border: '2px solid black', margin: '0 auto'
        }}>
          <img src="https://stylo.pk/cdn/shop/collections/Pumps_medium.png?v=1730451867" alt="Pumps" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h4 className="description">PUMPS</h4>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="item">
        <div className="pic">
          <img src="https://stylo.pk/cdn/shop/collections/Moccasin_medium.png?v=1730451888" alt="Moccasin" />
        </div>
        <h4 className="description">MOCCASIN</h4>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="item">
        <div className="pic">
          <img src="https://stylo.pk/cdn/shop/collections/courtshoes_medium.png?v=1730451958" alt="Court Shoes" />
        </div>
        <h4 className="description">COURT SHOES</h4>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="item">
        <div className="pic">
          <img src="https://stylo.pk/cdn/shop/collections/Back-open_medium.png?v=1730982930" alt="Back Open" />
        </div>
        <h4 className="description">BACK OPEN</h4>
      </div>
    </div>

    <div className="swiper-slide">
      <div className="item">
        <div className="pic">
          <img src="https://stylo.pk/cdn/shop/collections/Sneakers_medium.png?v=1723014128" alt="Sneakers" />
        </div>
        <h4 className="description">SNEAKERS</h4>
      </div>
    </div> */}
  
  
  
  
  <div style={{margin:'30px 0'}}>
  <h2 style={{textAlign:'center', marginBottom:'20px'}}>Best Discount</h2>
     <Swiper
       slidesPerView={3}
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
       1024: {
         slidesPerView: 5,
         spaceBetween: 50,
       },
     }}
     >
       <SwiperSlide> 
                <div className="item 1">
                <img src="https://stylo.pk/cdn/shop/collections/Pumps_medium.png?v=1730451867" alt="Pumps" 
    
               />
               <h4 className="description">PUMPS</h4>
                </div>
       </SwiperSlide>
       <SwiperSlide> 
                <div className="item 2">
                <img src="https://stylo.pk/cdn/shop/collections/Moccasin_medium.png?v=1730451888" alt="Moccasin" />
                <h4 className="description">MOCCASIN</h4>
                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 3">
       <img src="https://stylo.pk/cdn/shop/collections/courtshoes_medium.png?v=1730451958" alt="Court Shoes" />
       <h4 className="description">COURT SHOES</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 4">
       <img src="https://stylo.pk/cdn/shop/collections/Back-open_medium.png?v=1730982930" alt="Back Open" />
       <h4 className="description">BACK OPEN</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 5">
       <img src="https://stylo.pk/cdn/shop/collections/Sneakers_medium.png?v=1723014128" alt="Sneakers" />
       <h4 className="description">SNEAKERS</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide> 
                <div className="item 6">
                <img src="https://stylo.pk/cdn/shop/collections/Moccasin_medium.png?v=1730451888" alt="Moccasin" />
                <h4 className="description">MOCCASIN</h4>
                </div>
       </SwiperSlide>
      
     </Swiper>
     </div>

  
  </>

);

export default Discounts2;
