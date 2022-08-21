import productImg from '../../assets/jiboia-grande.avif'

import './styles.scss'

export function ProductPage() {
  return (
    <div className="container-pdp">
      <img src={productImg} alt="Jiboia Planta" />
      <div className="product-info">
        <h2>Jibóia Prateada</h2>
        <p className="product-description">
          A jibóia-prateada é uma folhagem excelente para apreciarmos dentro de
          casa ou no escritório. Ela gosta do calor e da luz de uma janela, mas
          não aprecia o ar-condicionado.
        </p>
        <div className="price-info">
          <span>R$ 60,00</span>
          <div className="price-parcel">
            <p className="price">R$ 45,00</p>
            <p className="parcel">à vista ou em 2x de R$ 22,50</p>
          </div>
        </div>
        <div className="buttons">
          <div className="quantity-box">
            <button className="minus">-</button>
            <p className="quantity">0</p>
            <button className="plus">+</button>
          </div>
          <button className="buy">Comprar</button>
        </div>
      </div>
    </div>
  )
}
