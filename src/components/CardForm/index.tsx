import './style.css'
import Close from '../../assets/close.svg'
import { ReactElement } from 'react';


interface CardFormProps {
	handleClose: () => void;
}

function CardForm({ handleClose }: CardFormProps): ReactElement {

  return (
    <>
    <div className="CardInput">
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea name="postContent" rows={5} cols={40} placeholder='Descrição' />
        <input className='intup__tags' type="text" placeholder='Tags' />
      </form>
      <div className='close'>
      <button 
        className='button__close' 	
        type="button"
				onClick={handleClose}
        >
        <img src={Close} alt="close" /></button>
      </div>
    </div>
    </>
  )
}

export default CardForm;