import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="error">
      <p className="error__nbr">404</p>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <p className="error--link">
        <Link className="error--link__text" to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  )
}
