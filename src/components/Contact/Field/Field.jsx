import style from './Field.module.css'

const Field = ({ children, lblText, id }) => {
  return (
    <div className={style.container}>
      <label className={style.lbl} htmlFor={id}>{lblText}</label>
      {children}
    </div>
  )
}

export default Field
