import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Icon } from '@iconify/react'
import icon from './Icons/icon.jsx'
import plane from './Icons/icon.jsx'
import ServicesCard from './Components/ServicesCard.jsx'

import ServicesOffered from './Components/ServicesOffered.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ServicesOffered/>
  </React.StrictMode>,
)
