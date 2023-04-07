import { useState } from 'react';
import './style.css'
import Add from '../assets/add.svg';
import SideBar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function App() {

  const [openCreateNewItem, setOpenCreateNewItem] = useState<boolean>(false);

interface CardFormProps {
	handleClose: () => void;
}

  function toggleOpenCreateNewItem(): void {
		setOpenCreateNewItem((state) => !state);
	}

  return (
    <div id="app">
      <SideBar/>
      <main>
        <div className="inner">
          <Header/>
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
              <div className='title-button'>
              <h2>A fazer</h2>
              {openCreateNewItem === false ?
                <button className='button-add' onClick={toggleOpenCreateNewItem}><img src={Add} alt="Adicionar"/></button>
              : null}
              </div>
              <div className="cards">
              {openCreateNewItem && (
                <CardForm handleClose={toggleOpenCreateNewItem} />
              )}
              <Card /> 
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
