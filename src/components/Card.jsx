import React from "react"

export function Card({ cover, title }) {
  return (
    <article className="card">
      <img alt={title} src={cover} className="card__img" />
      <div className="card--layer">
        <p className="card--layer__title">{title}</p>
      </div>
    </article>
  )
}
