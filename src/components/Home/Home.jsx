import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialMedia from '../SocialMedia/SocialMedia'

import style from './Home.module.css'

const Home = () => {
  const [text] = useTypewriter({
    words: ['«FullStack Developer»', '«FrontEnd Developer»', '«BackEnd Developer»'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 20,
    delaySpeed: 3000
  })

  return (
    <section className={style.homeContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Aldo Aliscioni</h1><span className={`${style.typedText}`}>{text}<Cursor /></span>
      </div>
      <SocialMedia />
      <button title='Arrow' className={`${style.btnArrow} ${style.animationJump}`}>
        <svg width='35' height='35' fill='#fff' viewBox='0 0 16 16'>
          <path d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
        </svg>
      </button>
    </section>
  )
}

export default Home
