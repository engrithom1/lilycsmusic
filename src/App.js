import React, { Component } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Lilycs from './pages/Lilycs'
import NotFound from './NotFound'
import Bibliograph from './pages/Bibliograph'
import FreeMp3 from './pages/FreeMp3'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Lilycs/>}/>
          <Route exact path="/free-mp3" element={<FreeMp3/>}/>
          <Route exact path="/bibliograph" element={<Bibliograph/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
      
      </BrowserRouter>
    )
  }
}

export default App
