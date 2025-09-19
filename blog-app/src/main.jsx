import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import F1 from './f1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
