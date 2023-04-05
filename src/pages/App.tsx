import './style.css'
import Pencil from '../assets/pencil.svg';

import SideBar from '../components/Sidebar';

function App() {
  return (
    <div id="app">
      <SideBar/>
      <main>
        <div className="inner">
          <section className="title-avatar">
            <h1>Meu KanBan <img src={Pencil} alt="" /></h1>
            <img src="https://github.com/HenriqueSilva367.png" alt="avatar" />
          </section>

          <section className="filter">
            <button>
              
              <span>Filtrar</span>
            </button>
            <div className="input-wrapper">
              
              <input
                type="text"
                placeholder="Busque por cards, assuntos ou responsáveis..."
              />
            </div>
          </section>
          <section className="kanban">
            <div className="todo">
              <h2>A fazer</h2>
              <div className="cards">
                <div className="card">
                  <h3>#boraCodar um Kanban 🧑🏾‍💻</h3>
                  <p>
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban.
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                    <span>desafio</span>
                  </div>
                </div>
                <div className="card">
                  <h3>Manter a ofensiva 🔥</h3>
                  <p>
                    Manter minha atividade na plataforma da Rocketseat para não
                    perder a ofensiva
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="doing">
              <h2>Fazendo</h2>
              <div className="cards">
                <div className="card">
                  <h3>Conferir o novo desafio 🚀</h3>
                  <p>
                    Conferir o novo projeto do #boraCodar para fazê-lo da melhor
                    maneira possível
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                    <span>desafio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="done">
              <h2>Feito</h2>
              <div className="cards">
                <div className="card">
                  <h3>#boraCodar uma página de login 🧑‍💻</h3>
                  <p>
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir uma página de login.
                  </p>
                  <div className="tags">
                    <span>rocketseat</span>
                    <span>desafio</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
