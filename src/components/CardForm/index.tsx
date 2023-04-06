import './style.css'
import Close from '../../assets/close.svg'
function CardForm() {
  return (
    <>
    <div className="CardInput">
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea name="postContent" rows={10} cols={50} placeholder='Descrição' />
      </form>
      <div className='close'>
      <button className='button__close'><img src={Close} alt="" /></button>
      </div>
    </div>
    </>
  )
}

export default CardForm;