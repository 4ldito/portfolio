import { useRef } from 'react'

import { useTranslation } from 'react-i18next'

import Logo from '../Icons/Logo'
import { FaBars as Bars } from 'react-icons/fa'
import { AiOutlineCloseCircle as Close } from 'react-icons/ai'

import style from './Navbar.module.css'
import { goToSection } from '../../utils/navigation'

const Navbar = () => {
  const [text, i18n] = useTranslation('global')
  const listNavbar = useRef()

  const handleBtnMenu = (open) => {
    const pixels = open ? '0' : '-600px'
    listNavbar.current.style.left = pixels
  }

  const handleBtnNavbarClick = (e, value) => {
    goToSection(e, value)
    handleBtnMenu()
  }

  return (
    <nav className={style.navbar}>
      <button className={style.brandLogo} title='Home' onClick={e => handleBtnNavbarClick(e, 'home')}>
        <Logo />
      </button>
      <button title='Menu' onClick={() => handleBtnMenu(true)} className={style.bars}>
        <Bars color='#fff' size='1.5em' />
      </button>
      <ul ref={listNavbar} className={style.listNavbar}>
        <li>
          <button title={text('navbar.navigation.home')} onClick={e => handleBtnNavbarClick(e)} className={`home ${style.btnNavbar} ${style.active}`} value='home'>
            {text('navbar.navigation.home')}
          </button>
        </li>
        <li>
          <button title={text('navbar.navigation.about')} onClick={e => handleBtnNavbarClick(e)} className={`about ${style.btnNavbar}`} value='about'>
            {text('navbar.navigation.about')}
          </button>
        </li>
        <li>
          <button title={text('navbar.navigation.portfolio')} onClick={e => handleBtnNavbarClick(e)} className={`portfolio ${style.btnNavbar}`} value='portfolio'>
            {text('navbar.navigation.portfolio')}
          </button>
        </li>
        <li>
          <button title={text('navbar.navigation.contact')} onClick={e => handleBtnNavbarClick(e)} className={`contact ${style.btnNavbar}`} value='contact'>
            {text('navbar.navigation.contact')}
          </button>
        </li>
        <li>
          <button title='Cerrar' onClick={() => handleBtnMenu(false)} className={style.close}>
            <Close color='#C42B1C' size='3em' />
          </button>
        </li>
      </ul>
      <div className={style.flagsContainer}>
        <button title='Cambiar a Inglés' onClick={() => { i18n.changeLanguage('en'); window.localStorage.setItem('language', 'en') }}>
          <img className={style.flagImg} src='img/us.svg' alt='English' />
        </button>
        <button title='Cambiar a Español' onClick={() => { i18n.changeLanguage('es'); window.localStorage.setItem('language', 'es') }}>
          <img className={style.flagImg} src='img/es.svg' alt='Spanish' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
