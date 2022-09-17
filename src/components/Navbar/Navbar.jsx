import { useRef } from 'react'

import Logo from '../Icons/Logo'
import { FaBars as Bars } from 'react-icons/fa'
import { AiFillCloseCircle as Close } from 'react-icons/ai'

import style from './Navbar.module.css'

const Navbar = () => {
  const listNavbar = useRef()

  const handleBtnOpenMenu = () => {
    listNavbar.current.style.left = '0'
  }

  const handleBtnCloseMenu = () => {
    listNavbar.current.style.left = '-1000px'
  }

  return (
    <nav className={style.navbar}>
      <li><a href='#'> <Logo className={style.brandLogo} /></a></li>
      <button onClick={handleBtnOpenMenu} href='#' className={style.bars}>
        <Bars color='#fff' size='1.5em' />
      </button>
      <ul ref={listNavbar} className={style.listNavbar}>
        <li><button onClick={handleBtnCloseMenu} className={style.close}><Close color='#C42B1C' size='3em' /></button></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar} ${style.active}`} id='home' href='#'>Home</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='about' href='#'>About me</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='portfolio' href='#'>Portfolio</a></li>
        <li><a onClick={e => handleBtnCloseMenu()} className={`${style.btnNavbar}`} id='contact' href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
