import {
  YoutubeLogo,
  TwitchLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from 'phosphor-react'
import { Link } from 'react-router-dom'

import './styles.scss'

export function Footer() {
  return (
    <footer>
      <ul className="links-footer">
        <li className="border-pink">
          <Link to="/">Home</Link>
        </li>
        <li className="border-gray">
          <Link to="/plants">Shop</Link>
        </li>
        <li className="border-blue">
          <a href="#">Galeria</a>
        </li>
        <li className="border-orange">
          <a href="#">Contato</a>
        </li>
      </ul>
      <div className="social-medias">
        <a href="#">
          <YoutubeLogo size={48} className="pink" />
        </a>
        <a href="#">
          <TwitchLogo size={48} className="gray" />
        </a>
        <a href="#">
          <FacebookLogo size={48} className="blue" />
        </a>
        <a href="#">
          <InstagramLogo size={48} className="dark-gray" />
        </a>
        <a href="#">
          <TwitterLogo size={48} className="orange" />
        </a>
      </div>
      <p className="foot">
        Aplicação feita para estudo baseada no layout de{' '}
        <a
          href="https://dribbble.com/shots/19128112--Plantic-Plant-Shop-Website"
          target="_blank"
          rel="noreferrer"
        >
          Mohammad Hadi Ahmadian,
        </a>{' '}
        fotos de <a href="https://feey.ch/">Feey</a> e desenvolvido por{' '}
        <a
          href="https://github.com/giovanna-mrosa"
          target="_blank"
          rel="noreferrer"
        >
          Giovanna Rosa
        </a>
        , 2022.©
      </p>
    </footer>
  )
}
