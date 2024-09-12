import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/s1.css'
import  './styles/location.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import './i18n'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
