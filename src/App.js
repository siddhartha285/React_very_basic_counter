import React from 'react'
import Header from './components/Header'
import Main from './components/Maini'
import Footer from './components/Footer'
import "./styles/header.css"
import './styles/main.css'
import './styles/footer.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
