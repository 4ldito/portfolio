import { useRef } from 'react'

import { useTranslation } from 'react-i18next'

import Logo from '../Icons/Logo'
import { FaBars as Bars } from 'react-icons/fa'
import { AiOutlineCloseCircle as Close } from 'react-icons/ai'

import style from './Navbar.module.css'

const Navbar = () => {
  const [text, i18n] = useTranslation('global')
  const listNavbar = useRef()

  const handleBtnOpenMenu = () => {
    listNavbar.current.style.left = '0'
  }

  const handleBtnCloseMenu = () => {
    listNavbar.current.style.left = '-600px'
  }

  return (
    <nav className={style.navbar}>
      <a href='#'><Logo className={style.brandLogo} /></a>
      <button title='Menu' onClick={handleBtnOpenMenu} href='#' className={style.bars}>
        <Bars color='#fff' size='1.5em' />
      </button>
      <ul ref={listNavbar} className={style.listNavbar}>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar} ${style.active}`} id='home' href='#'>{text('navbar.navigation.home')}</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='about' href='#'>{text('navbar.navigation.about')}</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='portfolio' href='#'>{text('navbar.navigation.portfolio')}</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='contact' href='#'>{text('navbar.navigation.contact')}</a></li>
        <li><button onClick={handleBtnCloseMenu} className={style.close}><Close color='#C42B1C' size='3em' /></button></li>
      </ul>
      <div className={style.flagsContainer}>
        <button onClick={() => i18n.changeLanguage('en')}><img className={style.flagImg} src='https://flagcdn.com/us.svg' alt='English' /></button>
        <button onClick={() => i18n.changeLanguage('es')}><img className={style.flagImg} src='https://flagcdn.com/es.svg' alt='Spanish' /></button>
      </div>
    </nav>
  )
}

export default Navbar
