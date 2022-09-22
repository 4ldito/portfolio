
import Logo from '../Icons/Logo'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className='socialMediaContainer'>
        <p>ola</p>
      </div>
      <div className='logoContainer'>
        <button href='#'><Logo className={style.brandLogo} /></button>

      </div>
    </div>
  )
}

export default Footer
