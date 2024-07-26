import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logoHeader.png"

export function Header() {
  return (
    <header className="header">
      <img alt="Kasa logo" src={logo} className="header--logo" />

      <nav className="header--nav">
        <NavLink className="header--nav--link" to="/">Accueil</NavLink>
        <NavLink className="header--nav--link" to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}
