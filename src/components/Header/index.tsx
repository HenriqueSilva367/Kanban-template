import './style.css'
import Pencil from '../../assets/pencil.svg';

function Header() {
  return (
    <>
      <section className="title-avatar">
        <h1>
          Meu KanBan <img src={Pencil} alt="" />
        </h1>
        <img src="https://github.com/HenriqueSilva367.png" alt="avatar" />
      </section>
    </>
  );
}

export default Header;
