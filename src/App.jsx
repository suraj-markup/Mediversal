import Header from './Components/Header'
import Login from './Login'
import Footer from './Components/Footer'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
function App() {
  

  return (
    <Router>

    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
       
      <Footer/>
    </div>
    </Router>
  )
}

export default App
