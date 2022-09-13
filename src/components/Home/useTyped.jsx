import { useEffect } from 'react'
import Typed from 'typed.js'

const useTyped = (spanTyped) => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const typed = new Typed(spanTyped.current, {
      strings: ['«FullStack Developer»', '«FrontEnd Developer»', '«BackEnd Developer»'],
      loop: true,
      startDelay: 0,
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 4000,
      cursorChar: '|'
    })
  }, [])
}

export default useTyped
