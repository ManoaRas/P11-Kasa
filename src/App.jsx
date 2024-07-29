import { Route, Routes, useLocation } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { Home } from "./pages/Home"
import { Accommodation } from "./pages/Accommodation"
import { About } from "./pages/About"
import { Error } from "./pages/Error"

export function App() {
  const location = useLocation();
  const isErrorPage = !['/', '/accommodation/:id', '/about'].includes(location.pathname);

  return (
    <>
      <Header />

      <main className={isErrorPage ? 'error-page' : ''}>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Accommodation />} path='/accommodation/:id' />
          <Route element={<About />} path='/about' />
          <Route element={<Error />} path='*' />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
