import { CaretLeft, CaretRight } from 'phosphor-react'
import plant from '../../assets/jiboia-grande.avif'

import './styles.scss'

export function Shop() {
  return (
    <div className="shop-container">
      <form action="">
        <input type="search" placeholder="O que voce está procurando?" />
        <button>Buscar</button>
      </form>
      <div className="products-list">
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
        <div className="product-box">
          <img src={plant} alt="Jiboia" />
          <div className="product-info">
            <p className="product-name">Jibóia Prateada</p>
            <p className="product-list-price">R$ 60,00</p>
            <p className="product-price">R$ 45,00</p>
            <p className="product-installments">ou 2x de R$ 25,50</p>
          </div>
        </div>
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
