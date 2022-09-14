import logo from '../../assets/logo.svg'

import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.listNavbar}>
        <li><img src={logo} className={style.brandLogo} alt='Brand Logo' /></li>
        <li><a id='home' href='#'>Home</a></li>
        <li><a id='portfolio' href='#'>Portfolio</a></li>
        <li><a id='about' href='#'>About me</a></li>
        <li><a id='contact' href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
