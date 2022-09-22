import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AiOutlineCloseCircle as Close } from 'react-icons/ai'
import Modal from '../Modal/Modal'

import photoProfile from '../../assets/photo.jpeg'

import style from './About.module.css'

const About = () => {
  const [viewModal, setViewModal] = useState(false)
  const [text] = useTranslation('global')

  const handleViewModal = () => {
    setViewModal(!viewModal)
  }

  return (
    <section id='about' className={style.sectionContainer}>
      <div className={style.container}>
        <div className={style.photoContainer}>
          <img className={style.imgPhotoProfile} src={photoProfile} alt='' />
        </div>
        <div className={style.infoContainer}>
          <h2 className={style.title}>{text('about.title')}</h2>
          <p className={style.aboutText}>{text('about.firstParagraph')}</p>
          <p className={style.aboutText}>{text('about.secondParagraph')}</p>
          <button onClick={handleViewModal} className={style.btn}>{text('about.downloadResume')}</button>
        </div>
      </div>
      {viewModal && (
        <Modal handleViewModal={handleViewModal}>
          <h3 className={style.titleModal}>{text('about.downloadResume')}</h3>
          <a className={`${style.btn} ${style.animationUp}`} target='_blank' href='resumeSpanish.pdf'>{text('about.modalBtnES')}</a>
          <a className={`${style.btn} ${style.animationDown}`} target='_blank' href='resumeEnglish.pdf'>{text('about.modalBtnEN')}</a>
          <button onClick={handleViewModal} className={style.close}><Close color='#d93025' size='3em' /></button>
        </Modal>
      )}
    </section>
  )
}

export default About
