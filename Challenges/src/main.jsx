import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home'
//import './reducer/intro-reducer'

/**const [page, setPage] = setState( value )
const [componets, setComponents] = useState([])**/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
