import { FaGithub as Github, FaHeart as Heart } from 'react-icons/fa'
import { IoLogoLinkedin as LinkedIn } from 'react-icons/io'
import { FiMail as Mail } from 'react-icons/fi'
import Logo from '../Icons/Logo'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.socialMediaContainer}>
        <ul className={style.list}>
          <li>
            <a href='https://github.com/4ldito' target='_blank' rel='noreferrer'>
              <Github className={`${style.btnSocialMedia}`} size='2.5em' title='Github' />
            </a>
          </li>

          <li>
            <a href='https://www.linkedin.com/in/aldo-aliscioni/' target='_blank' rel='noreferrer'>
              <LinkedIn className={`${style.btnSocialMedia}`} size='2.5em' title='LinkedIn' />
            </a>
          </li>

          <li>
            <a href='mailto:aldoaliscioni18@gmail.com' target='_blank' rel='noreferrer'>
              <Mail className={`${style.btnSocialMedia}`} size='2.5em' title='Mail' />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.textContainer}>
        <p className={style.loveText}>Made with love <Heart /></p>
      </div>
      <div className={style.logoContainer}>
        <button title='Back to Home' href='#'><Logo className={style.brandLogo} /></button>
      </div>
    </div>
  )
}

export default Footer
