import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Rutas} from "./routes/Routes"

//antdesig
//*import { TableCrud } from './Pages/TableCrud';
//se debe de cambiar tablecrud por routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
    
    
  </React.StrictMode>
)
  