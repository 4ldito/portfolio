import style from './IconContainer.module.css'

const IconContainer = ({ children }) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default IconContainer
