import { FaGithub as Github, FaWhatsapp as WhatsApp } from 'react-icons/fa'
import { IoLogoLinkedin as LinkedIn } from 'react-icons/io'
import { FiMail as Mail } from 'react-icons/fi'

import style from './SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <div className={style.container}>
      <ul className={style.listContainer}>
        <li>
          <a href='https://github.com/4ldito' target='_blank' rel='noreferrer'>
            <Github className={`${style.btnSocialMedia} ${style.github}`} size='2.5em' title='Github' />
          </a>
        </li>

        <li>
          <a href='https://www.linkedin.com/in/aldo-aliscioni/' target='_blank' rel='noreferrer'>
            <LinkedIn className={`${style.btnSocialMedia} ${style.linkedin}`} size='2.5em' title='LinkedIn' />
          </a>
        </li>

        <li>
          <a href='https://api.whatsapp.com/send?phone=+5492473453215&text=Hola%20Aldo!%20Me%20gustar%C3%ADa%20contactar%20con%20vos%20para..' target='_blank' rel='noreferrer'>
            <WhatsApp className={`${style.btnSocialMedia} ${style.whatsApp}`} size='2.5em' title='WhatsApp' />
          </a>
        </li>

        <li>
          <a href='mailto:aldoaliscioni18@gmail.com' target='_blank' rel='noreferrer'>
            <Mail className={`${style.btnSocialMedia} ${style.mail}`} size='2.5em' title='Mail' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
