import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home'
//import './reducer/intro-reducer'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './Challenge11/pages/MainApp'

/**const [page, setPage] = setState( value )
const [componets, setComponents] = useState([])**/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
  // <BrowserRouter>
  //   <MainApp />
  // </BrowserRouter>

)
