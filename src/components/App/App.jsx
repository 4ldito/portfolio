import Navbar from './../Navbar/Navbar'
import Home from '../Home/Home'

import style from './App.module.css'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

function App () {
  return (
    <div className={style.app}>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
