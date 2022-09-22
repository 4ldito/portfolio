import { HiExternalLink as ExternalLink } from 'react-icons/Hi'
import { FaGithub as Github } from 'react-icons/fa'

import style from './Card.module.css'

const Card = ({ title, img, info, techs, deploy, github, direction }) => {
  return (
    <article className={`${style.container} ${direction % 2 !== 0 && style.reverse}`}>
      <div className={style.containerImg}>
        <img className={style.img} src={img} alt={`${title}`} />
        <div className={style.hoverInfo}>
          <a className={`${style.deploy}`} target='_blank' href={deploy} rel='noreferrer'><ExternalLink size='3em' /></a>
          <a className={`${style.github}`} target='_blank' href={github} rel='noreferrer'><Github size='3em' /></a>
          <div className={style.techsContainer}>
            {techs.map(tech => {
              return <p className={style.tech} key={tech}>{tech}</p>
            })}
          </div>
        </div>
      </div>
      <div className={style.infoContainer}>
        <h3 className={style.title}>{title}</h3>
        {info.map((text, i) => {
          return <p key={i} className={style.infoText}>{text}</p>
        })}
      </div>
    </article>
  )
}

export default Card
