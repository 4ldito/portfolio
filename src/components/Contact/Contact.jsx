import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import axios from 'axios'
import imgError from '../../assets/error_icon.png'
import imgOk from '../../assets/ok_icon.png'

import Modal from '../Modal/Modal'
import Field from './Field/Field'

import style from './Contact.module.css'

const formId = import.meta.env.VITE_FORM_URL
const formSparkUrl = `https://submit-form.com/${formId}`

const initialNewEmail = {
  email: { text: '', error: false },
  name: { text: '', error: false },
  message: { text: '', error: false }
}

let typeModal = 'error'

const Contact = () => {
  const [text] = useTranslation('global')
  const [submiting, setSubmiting] = useState(false)
  const [newEmail, setNewEmail] = useState({ ...initialNewEmail })
  const [viewModal, setViewModal] = useState(false)

  const handleViewModal = (type) => {
    if (type) typeModal = type
    setViewModal(!viewModal)
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    const { id, value } = e.target
    setNewEmail(state => { return { ...state, [id]: { text: value, error: !value } } })
  }

  const isValidEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regex.test(email)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const copyNewEmail = { ...newEmail }
    let error = false

    if (!isValidEmail(copyNewEmail.email.text)) { copyNewEmail.email.error = true; error = true }
    if (newEmail.name.text.length < 3) { copyNewEmail.name.error = true; error = true }
    if (newEmail.message.text.length < 5) { copyNewEmail.message.error = true; error = true }
    setNewEmail(copyNewEmail)
    if (error) return

    setSubmiting(true)
    const payload = {
      email: copyNewEmail.email.text,
      name: copyNewEmail.name.text,
      message: copyNewEmail.message.text
    }

    try {
      await axios.post(formSparkUrl, payload)
      handleViewModal('success')
      setNewEmail({ ...initialNewEmail })
    } catch (error) {
      handleViewModal('error')
    } finally {
      setSubmiting(false)
    }
  }

  return (
    <>
      <section id='contact' className={style.container}>
        <div className={style.formContainer}>
          <h3 className={style.title}>{text('contact.title')}</h3>
          <form className={style.form} onSubmit={handleOnSubmit}>
            <Field lblError={text('contact.errors.field_empty')} id='email' lblText='Email' error={newEmail.email.error}>
              <input placeholder='email@test.com' id='email' onChange={handleInputChange} value={newEmail.email.text} type='email' />
            </Field>
            <Field lblError={text('contact.errors.field_empty')} id='name' lblText={text('contact.name')} error={newEmail.name.error}>
              <input placeholder={text('contact.name')} id='name' onChange={handleInputChange} value={newEmail.name.text} type='text' />
            </Field>
            <Field lblError={text('contact.errors.field_empty')} id='message' lblText={text('contact.message')} error={newEmail.message.error}>
              <textarea rows='4' placeholder={text('contact.messagePlaceholder')} id='message' onChange={handleInputChange} value={newEmail.message.text} />
            </Field>
            <div className={style.btnContainer}>
              <button className={`${style.btn} ${submiting && style.btnLoading}`} formNoValidate type='submit'>{submiting ? <div className={style.circle} /> : text('contact.submit')}</button>
            </div>
          </form>
        </div>
      </section>
      {viewModal && (
        <Modal handleViewModal={handleViewModal}>
          <img className={style.imgIcon} src={typeModal === 'success' ? imgOk : imgError} alt='Icon' />
          <h4 className={style.titleModal}>{text(`contact.modal.${typeModal}_title`)}</h4>
          <p className={style.textModal}>{text(`contact.modal.${typeModal}_text`)}</p>
          <button className={style.btn} onClick={handleViewModal}>{text('contact.modal.btnText')}</button>
        </Modal>
      )}
    </>
  )
}

export default Contact
