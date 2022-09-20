import photoProfile from '../../assets/photo.jpeg'
import { useTranslation } from 'react-i18next'

import style from './About.module.css'

const About = () => {
  const [text] = useTranslation('global')

  return (
    <section className={style.sectionContainer}>
      <div className={style.container}>
        <div className={style.photoContainer}>
          <img className={style.imgPhotoProfile} src={photoProfile} alt='' />
        </div>
        <div className={style.infoContainer}>
          <h2 className={style.title}>{text('about.title')}</h2>
          <p className={style.aboutText}>{text('about.firstParagraph')}</p>
          <p className={style.aboutText}>{text('about.secondParagraph')}</p>
        </div>
      </div>
    </section>
  )
}

export default About
