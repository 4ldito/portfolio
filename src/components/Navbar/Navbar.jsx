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

  const handleBtnNavbarClick = (e, value) => {
    e.preventDefault()
    handleBtnCloseMenu()
    const element = document.getElementById(value || e.target.value)
    const heigth = element.clientHeight / 12
    const scrollTo = element.offsetTop - heigth
    window.scrollTo({ top: scrollTo, behavior: 'smooth' })
  }

  return (
    <nav className={style.navbar}>
      <button onClick={e => handleBtnNavbarClick(e, 'home')}>
        <Logo className={style.brandLogo} />
      </button>
      <button title='Menu' onClick={handleBtnOpenMenu} className={style.bars}>
        <Bars color='#fff' size='1.5em' />
      </button>
      <ul ref={listNavbar} className={style.listNavbar}>
        <li>
          <button onClick={e => handleBtnNavbarClick(e)} className={`home ${style.btnNavbar} ${style.active}`} value='home'>
            {text('navbar.navigation.home')}
          </button>
        </li>
        <li>
          <button onClick={e => handleBtnNavbarClick(e)} className={`about ${style.btnNavbar}`} value='about'>
            {text('navbar.navigation.about')}
          </button>
        </li>
        <li>
          <button onClick={e => handleBtnNavbarClick(e)} className={`portfolio ${style.btnNavbar}`} value='portfolio'>
            {text('navbar.navigation.portfolio')}
          </button>
        </li>
        <li>
          <button onClick={e => handleBtnNavbarClick(e)} className={`contact ${style.btnNavbar}`} value='contact'>
            {text('navbar.navigation.contact')}
          </button>
        </li>
        <li>
          <button onClick={handleBtnCloseMenu} className={style.close}>
            <Close color='#C42B1C' size='3em' />
          </button>
        </li>
      </ul>
      <div className={style.flagsContainer}>
        <button onClick={() => { i18n.changeLanguage('en'); window.localStorage.setItem('language', 'en') }}>
          <img className={style.flagImg} src='https://flagcdn.com/us.svg' alt='English' />
        </button>
        <button onClick={() => { i18n.changeLanguage('es'); window.localStorage.setItem('language', 'es') }}>
          <img className={style.flagImg} src='https://flagcdn.com/es.svg' alt='Spanish' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
