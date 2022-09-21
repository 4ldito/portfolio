import { useRef, useEffect } from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialMedia from '../SocialMedia/SocialMedia'

import style from './Home.module.css'
import styleNavbar from '../Navbar/Navbar.module.css'

const Home = () => {
  const [text] = useTypewriter({
    words: ['«FullStack Developer»', '«FrontEnd Developer»', '«BackEnd Developer»'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 20,
    delaySpeed: 3000
  })

  const mouseDiv = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    mouseDiv.current.classList.remove(style.animation)
    // Change navbar active
    const sections = document.querySelectorAll('section')
    let current = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id')
        // console.log('estas en', current)
      }
    })
    document.querySelector(`.${styleNavbar.active}`).classList.remove(styleNavbar.active)
    document.querySelector(`.${current}`).classList.add(styleNavbar.active)
  }

  return (
    <section id='home' className={style.homeContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Aldo Aliscioni</h1><span className={`${style.typedText}`}>{text}<Cursor /></span>
      </div>
      <SocialMedia />
      {/* <button title='Arrow' className={`${style.btnArrow} ${style.animationJump}`}>
        <svg width='35' height='35' fill='#fff' viewBox='0 0 16 16'>
          <path d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
        </svg>
      </button> */}
      <div className={style.scrollDowns}>
        <div className={style.mousey}>
          <div ref={mouseDiv} className={`${style.scroller} ${style.animation}`} />
        </div>
      </div>
    </section>
  )
}

export default Home
