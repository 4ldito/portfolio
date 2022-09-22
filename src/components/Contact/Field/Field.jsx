import style from './Field.module.css'

const Field = ({ children, lblText, lblError, id, error }) => {
  return (
    <div className={`${style.container} ${error && style.error}`}>
      <label className={style.lbl} htmlFor={id}>{lblText}</label>
      {children}
      {error && <label className={style.lblError}>{lblError}</label>}
    </div>
  )
}

export default Field
