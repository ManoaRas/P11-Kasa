import { NavLink } from "react-router-dom"

import Icon from "./Icon"

export default function Header() {
  return (
    <header className='kasa-header'>
      <Icon color="#FF6060" />

      <nav>
        <ul>
          <li><NavLink to='/'>Accueil</NavLink></li>
          <li><NavLink to='/about'>A propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
