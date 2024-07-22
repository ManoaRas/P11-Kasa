import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
// import Accommodation from "./pages/Accommodation"
// import About from "./pages/About"
// import Error from "./pages/Error"

import "./styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/accommodation/:id' element={<Accommodation />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='*' element={<Error />} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  </React.StrictMode>
)
