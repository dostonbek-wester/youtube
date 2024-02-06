import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Button } from '@mui/material';

export default function CategoriesBtn({listdata,clicking,Category_ID}) {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };


  return (
    <>
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={9}
        spaceBetween={30}
        
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
    
      >
        <SwiperSlide>
          <Button className={`category-btn${Category_ID==='All' ? "-black" : ""}`} >All</Button>
        </SwiperSlide>
        {listdata.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <Button className={`category-btn${Category_ID===slideContent.id ? "-black" : ""}`} onClick={()=>clicking(slideContent.id)}>{slideContent.snippet.title}</Button>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </>
  );
}
