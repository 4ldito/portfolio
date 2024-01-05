import { useEffect } from 'react'

import style from './Modal.module.css'

const Modal = ({ handleViewModal, children }) => {
  useEffect(() => {
    document.querySelector('body').classList.add('noScroll')

    return () => {
      document.querySelector('body').classList.remove('noScroll')
    }
  }, [])

  return (
    <section onClick={handleViewModal} className={style.background}>
      <div onClick={(e) => e.stopPropagation()} className={style.container}>
        <div className={style.infoContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modal
