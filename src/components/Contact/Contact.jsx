import axios from 'axios'
import { useState } from 'react'

import style from './Contact.module.css'
import Field from './Field/Field'

const formId = import.meta.env.VITE_FORM_URL
const formSparkUrl = `https://submit-form.com/${formId}`

const Contact = () => {
  const initialNewEmail = {
    email: '',
    name: '',
    message: ''
  }
  const [newEmail, setNewEmail] = useState(initialNewEmail)

  const handleInputChange = (e) => {
    e.preventDefault()
    const { id, value } = e.target
    setNewEmail(state => { return { ...state, [id]: value } })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const payload = { msg: 'Testing' }

    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id='contact' className={style.container}>
      <h3 className={style.title}>Contacto</h3>
      <form className={style.form} onSubmit={handleOnSubmit}>
        <Field id='email' lblText='Email'>
          <input placeholder='Email' id='email' onChange={handleInputChange} value={newEmail.email} type='email' />
        </Field>

        <Field id='name' lblText='Name'>
          <input placeholder='Name' id='name' onChange={handleInputChange} value={newEmail.name} type='text' />
        </Field>

        <Field id='message' lblText='Message'>
          <textarea placeholder='Message' id='message' onChange={handleInputChange} value={newEmail.message} />
        </Field>

        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
