import plant from '../../assets/jiboia-grande.avif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

import './styles.scss'
import 'swiper/css'
import 'swiper/css/scrollbar'

export function PromotionShelf() {
  return (
    <div className="carousel-box">
      <p className="title-sale">Promoções</p>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="carousel"
      >
        <SwiperSlide className="product">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="product">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="product">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="product">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="product">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
