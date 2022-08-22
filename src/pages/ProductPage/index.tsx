/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

import './styles.scss'

interface Plant {
  _id: string
  name: string
  description: string
  imageUrl: string
  listPrice: number
  price: number
  installmentsQuantity: number
  installmentsValue: number
}

export function ProductPage() {
  const [counter, setCounter] = useState<number>(1)
  const { productId } = useParams()
  const [plant, setPlant] = useState<Plant>({
    _id: '',
    name: '',
    description: '',
    imageUrl: '',
    listPrice: 0,
    price: 0,
    installmentsQuantity: 0,
    installmentsValue: 0,
  })

  async function getPlant() {
    const response = await api.get<Plant>(`/plant/${productId}`)
    setPlant(response.data)
  }

  useEffect(() => {
    getPlant()
  }, [])

  function increase() {
    setCounter((count) => count + 1)
  }

  function decrease() {
    if (counter > 1) {
      setCounter((count) => count - 1)
    } else {
      setCounter(1)
    }
  }

  function formatCurrency(price: number) {
    return Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100)
  }

  const disabledMinusButton = counter === 1

  return (
    <div className="container-pdp">
      <img src={plant.imageUrl} alt={plant.name} />
      <div className="product-info">
        <h2>{plant.name}</h2>
        <p className="product-description">{plant.description}</p>
        <div className="price-info">
          {plant.listPrice !== null && (
            <span>{formatCurrency(plant.listPrice)}</span>
          )}
          <div className="price-parcel">
            <p className="price">{formatCurrency(plant.price)}</p>
            <p className="parcel">
              à vista ou em {plant.installmentsQuantity}x de{' '}
              {formatCurrency(plant.installmentsValue)}
            </p>
          </div>
        </div>
        <div className="buttons">
          <div className="quantity-box">
            <button
              className="minus"
              disabled={disabledMinusButton}
              onClick={decrease}
            >
              -
            </button>
            <p className="quantity">{counter}</p>
            <button className="plus" onClick={increase}>
              +
            </button>
          </div>
          <button className="buy">Comprar</button>
        </div>
      </div>
    </div>
  )
}
