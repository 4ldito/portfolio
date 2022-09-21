import { useTranslation } from 'react-i18next'
import { AiOutlineCloseCircle as Close } from 'react-icons/ai'

import style from './Modal.module.css'

const Modal = ({ handleViewModal }) => {
  const [text] = useTranslation('global')

  return (
    <div onClick={handleViewModal} className={style.background}>
      <div onClick={(e) => e.stopPropagation()} className={style.container}>
        <a className={`${style.btn} ${style.animationLeft}`} target='_blank' href='resumeSpanish.pdf'>{text('about.modalBtnES')}</a>
        <a className={`${style.btn} ${style.animationRight}`} target='_blank' href='resumeEnglish.pdf'>{text('about.modalBtnEN')}</a>
        <button onClick={handleViewModal} className={style.close}><Close color='#C42B1C' size='4.5em' /></button>
      </div>
    </div>
  )
}

export default Modal
