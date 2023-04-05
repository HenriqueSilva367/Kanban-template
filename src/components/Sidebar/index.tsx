import Logo from '../../assets/Logo.svg';
import './style.css'

function SideBar() {
  return (
    <div className="container">
      <nav>
        <img src={Logo} alt="Logo do site" className="logo" />

        <ul>
          <li>
            <a href="#" className="active">
              
              Boards
            </a>
          </li>
          <li>
            <a href="#">
              
              Equipes
            </a>
          </li>
          <li>
            <a href="#">
             
              Relatórios
            </a>
          </li>
          <li>
            <a href="#">
             
              Ajustes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar;
