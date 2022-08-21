import logo from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'

import { Link } from 'react-router-dom'

import './styles.scss'

export function Navbar() {
  return (
    <nav className="nav-style">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className="links">
        <li>
          <Link to="/" className="pink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/plants" className="blue">
            Shop
          </Link>
        </li>
        <li>
          <a href="#" className="orange">
            Galeria
          </a>
        </li>
        <li>
          <a href="#" className="gray">
            Contato
          </a>
        </li>
      </ul>

      <div className="user">
        <button>Minha Conta</button>
        <ShoppingCart size={30} className="cart" />
      </div>
    </nav>
  )
}
