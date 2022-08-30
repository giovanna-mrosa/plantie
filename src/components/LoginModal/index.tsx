import { X } from 'phosphor-react'
import { useState } from 'react'

import './styles.scss'

export function LoginModal() {
  const [closeModal, setCloseModal] = useState(true)

  function handleModalLogin() {
    setCloseModal(!closeModal)
  }

  return (
    <div className={closeModal === true ? 'overlay' : 'hidden overlay'}>
      <div className="content">
        <h3>Faça seu Login</h3>

        <button className="close" onClick={handleModalLogin}>
          <X size={24} />
        </button>

        <form>
          <input type="text" placeholder="Email" required />

          <input type="password" placeholder="Senha" required />

          <button type="submit">FINALIZAR</button>
        </form>

        <span>
          Não tem login? <a href="#">Cadastre-se</a>
        </span>
      </div>
    </div>
  )
}
