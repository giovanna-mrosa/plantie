import asplenio from '../../assets/asplenio-mini.svg'
import cactus from '../../assets/cactus.svg'

import './styles.scss'

export function SectionOne() {
  return (
    <section className="section-one">
      <main>
        <div className="text-content">
          <div className="separate-line">
            <p>Quem</p>
            <img src={asplenio} alt="Asplênio" />
          </div>
          <p>planta, os males</p>
          <div className="separate-line">
            <span>espanta</span>
            <p>!</p>
          </div>
        </div>

        <form action="">
          <input type="search" placeholder="O que voce está procurando?" />
          <button>Buscar</button>
        </form>
      </main>
      <img src={cactus} alt="" />
    </section>
  )
}
