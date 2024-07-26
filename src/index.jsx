import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { Home } from "./pages/Home"
import { Accommodation } from "./pages/Accommodation"
import { About } from "./pages/About"
import { Error } from "./pages/Error"

import "./stylesheets/css/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Accommodation />} path='/accommodation/:id' />
          <Route element={<About />} path='/about' />
          <Route element={<Error />} path='*' />
        </Routes>
      </main>

      <Footer />
    </Router>
  </React.StrictMode>
)
