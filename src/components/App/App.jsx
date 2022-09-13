import Navbar from './../Navbar/Navbar'
import Home from '../Home/Home'

import style from './App.module.css'

function App () {
  return (
    <div className={style.app}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
