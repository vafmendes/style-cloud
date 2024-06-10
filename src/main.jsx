import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styleGlobal.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/style-cloud" element={<App />}></Route>
          <Route path="/login" element={ <Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
  
)
