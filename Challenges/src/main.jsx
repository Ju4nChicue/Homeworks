import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home'
//import './reducer/intro-reducer'
import { BrowserRouter } from 'react-router-dom'
//import { MainApp } from './Challenge11/pages/MainApp'
//import { MainApp } from './Segments-Query_Params/pages/MainApp'
import { MainApp } from './Challenge12/pages/MainApp'

/**const [page, setPage] = setState( value )
const [componets, setComponents] = useState([])**/

//Redux
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
  // <BrowserRouter>
  //   <MainApp />
  // </BrowserRouter>

)
