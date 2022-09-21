import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Modal from './Modal/Modal'

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
      {viewModal && <Modal handleViewModal={handleViewModal} />}
    </section>
  )
}

export default About
