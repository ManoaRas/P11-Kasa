import { NavLink } from "react-router-dom"

import logo from "../assets/logoHeader.png"

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={logo} alt="Kasa logo" />

      <nav className="header--nav">
        <NavLink className="header--nav__link" to="/">Accueil</NavLink>
        <NavLink className="header--nav__link" to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}
