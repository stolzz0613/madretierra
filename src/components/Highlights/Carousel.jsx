// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './carousel.css'
import Slide from './Slide'

import 'swiper/css'
import 'swiper/css/pagination'
import { useGlobalState } from '../../context/GlobalContext'

function Carousel() {

  const { state } = useGlobalState();
  const { properties } = state;

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      navigation
    >
      {properties?.length > 0 &&
        properties
          .filter(p => p?.obtenerPrecio?.[0]?.GET_PROPIEDADES?.destacado)
          .map((p, idx) => (
          <SwiperSlide key={idx}>
            <Slide property={p} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Carousel
