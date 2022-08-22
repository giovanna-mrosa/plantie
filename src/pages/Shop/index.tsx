import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../../components/SearchInput'

import api from '../../services/api'

import './styles.scss'

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

export function Shop() {
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

    setProducts(product)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="shop-container">
      <div className="input-box">
        <div className="return">
          <CaretLeft />
          <Link to="/">Voltar</Link>
        </div>
        <SearchInput />
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div className="product-box" key={product._id}>
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
              {product.listPrice !== null && (
                <p className="product-list-price">
                  {formatCurrency(product.listPrice)}
                </p>
              )}
              <p className="product-price">{formatCurrency(product.price)}</p>
              <p className="product-installments">
                à vista ou em {product.installmentsQuantity}x de{' '}
                {formatCurrency(product.installmentsValue)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>
          <CaretLeft size={15} />
        </button>
        <p>1</p>
        <button>
          <CaretRight size={15} />
        </button>
      </div>
    </div>
  )
}
