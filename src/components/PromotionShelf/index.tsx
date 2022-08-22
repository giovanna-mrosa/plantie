import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

import './styles.scss'
import 'swiper/css'
import 'swiper/css/scrollbar'

import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Product {
  _id: string
  name: string
  description: string
  imageUrl: string
  listPrice: number
  price: number
  installmentsQuantity: number
  installmentsValue: number
}

export function PromotionShelf() {
  const [products, setProducts] = useState<Product[]>([])

  function formatCurrency(price: number) {
    return Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100)
  }

  async function getProducts() {
    const response = await api.get<Product[]>('/plant')
    const product = response.data
    const saleProducts = product.filter((saleProduct) => {
      return saleProduct.listPrice !== null
    })

    setProducts(saleProducts)
  }

  useEffect(() => {
    getProducts()
  }, [])

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
        {products.map((product) => (
          <SwiperSlide key={product._id} className="product">
            <Link to={{ pathname: `/plant/${product._id}` }}>
              <img src={product.imageUrl} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link
                className="product-name"
                to={{ pathname: `/plant/${product._id}` }}
              >
                <p>{product.name}</p>
              </Link>
              <p className="product-list-price">
                {formatCurrency(product.listPrice)}
              </p>
              <p className="product-price">{formatCurrency(product.price)}</p>
              <p className="product-installments">
                à vista ou em {product.installmentsQuantity}x de{' '}
                {formatCurrency(product.installmentsValue)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
