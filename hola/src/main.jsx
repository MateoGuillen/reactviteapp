import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root= ReactDOM.createRoot(document.getElementById('root'))
const createButton = ({text})=>{
  return(<button>{text}</button>)
}
root.render(
    
    <App/>
    
  
)
