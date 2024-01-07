import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import languages from './translations'

import './index.css'

const language = window.localStorage.getItem('language') || 'en'

document.documentElement.lang = language

i18next.init({
  interpolation: { escapeValue: false },
  lng: language,
  resources: {
    es: { global: languages.es },
    en: { global: languages.en }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)
