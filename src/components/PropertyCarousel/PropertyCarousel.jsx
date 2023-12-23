import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './styles.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Lightbox } from 'react-modal-image'

export default function PropertyCarousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [showImage, setShowImage] = useState(null)

  return (
    <div className='propCarousel'>
      {showImage && <Lightbox
        medium={showImage}
        large={showImage}
        onClose={() => setShowImage(null)}
      />}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        onTap={e => setShowImage(images?.[e.activeIndex])}
      >
        {images?.map((i) => (
          <SwiperSlide key={i}>
            <img src={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((i) => (
          <SwiperSlide key={i}>
            <img src={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
