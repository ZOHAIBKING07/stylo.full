
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Discounts3 = () => {
  return (
<>
<div style={{margin:'30px 0'}}>
  <h2 style={{textAlign:'center', marginBottom:'20px'}}> WOMAN OUTFITS</h2>
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
                <img src="https://stylo.pk/cdn/shop/collections/20_medium.png?v=1730288741" alt="Pret 1PC" 
    
               />
               <h4 className="description">SHAWLs</h4>
                </div>
       </SwiperSlide>
       <SwiperSlide> 
                <div className="item 2">
                <img src="https://stylo.pk/cdn/shop/collections/05_medium.webp?v=1728027260" alt="Pret 1PC" 
    
               />
               <h4 className="description">PRET 1PC</h4>
                </div>
       </SwiperSlide>
       <SwiperSlide> 
                <div className="item 3">
                <img src="https://stylo.pk/cdn/shop/collections/06_medium.webp?v=1728027358" alt="Moccasin" />
                <h4 className="description">PRET 2PC</h4>
                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 4">
       <img src="https://stylo.pk/cdn/shop/collections/08_medium.webp?v=1728027380" alt="Court Shoes" />
       <h4 className="description">PRET 3PC</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 5">
       <img src="https://stylo.pk/cdn/shop/collections/01_medium.webp?v=1730972400" alt="Back Open" />
       <h4 className="description">Unstitched 1PC</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="item 6">
       <img src="https://stylo.pk/cdn/shop/collections/02_medium.webp?v=1730973748" alt="Sneakers" />
       <h4 className="description">Unstitched 2PC</h4>

                </div>
       </SwiperSlide>
       <SwiperSlide> 
                <div className="item 7">
                <img src="https://stylo.pk/cdn/shop/collections/07_medium.webp?v=1731058763" alt="Moccasin" />
                <h4 className="description">Unstitched 3PC</h4>
                </div>
       </SwiperSlide>
      
     </Swiper>
     </div>
</>
  )
}

export default Discounts3