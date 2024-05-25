import Play from './components/Play'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import './Play.css'
import Footer from './components/Footer'

function App() {

  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={null}></Route>
        <Route path='/play/*' element={<Play/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )
}



export default App
