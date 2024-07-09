import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import { ContactsContext } from './components/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactsContext>
      <App />
    </ContactsContext>
  </React.StrictMode>
)