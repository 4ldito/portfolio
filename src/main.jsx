import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'

import './index.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: { global: globalEs },
    en: { global: globalEn }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)
