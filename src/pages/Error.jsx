import React from "react"
import { Link } from "react-router-dom"

export function Error() {
  return (
    <section className="error">
      <p className="error__nbr">404</p>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <p className="error--link">
        <Link className="error--link-text" to="/">Retourner sur la page d’accueil</Link>
      </p>
    </section>
  )
}
