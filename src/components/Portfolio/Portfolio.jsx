import { useTranslation } from 'react-i18next'
import Card from './Card/Card'
import projects from './projects.json'

import style from './Portfolio.module.css'

const Portfolio = () => {
  const [text, i18n] = useTranslation('global')

  return (
    <section id='portfolio' className={style.container}>
      <h2 className={style.title}>{text('portfolio.title')}</h2>
      <div className={style.containerProjects}>
        {projects.map((p, i) => {
          return (
            <Card
              key={p.id}
              title={p.title}
              img={p.img}
              info={p[i18n.language].info.split('\n')}
              techs={p.techs}
              deploy={p.deploy}
              github={p.github}
              direction={i}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
