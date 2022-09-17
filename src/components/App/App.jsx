import Navbar from './../Navbar/Navbar'
import Home from '../Home/Home'

import style from './App.module.css'
import About from '../About/About'

function App () {
  return (
    <div className={style.app}>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
