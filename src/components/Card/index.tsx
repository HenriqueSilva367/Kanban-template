import "./style.css";

function Card() {
  
  return (
    <div className="card">
      <h3>#boraCodar um Kanban 🧑🏾‍💻</h3>
      <p>
        Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban.
      </p>
      <div className="tags">
        <span>rocketseat</span>
        <span>desafio</span>
        {/* <textarea name="postContent" rows={10} cols={50} /> */}
      </div>
    </div>
  )
}

export default Card;
