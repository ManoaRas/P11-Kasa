export function Card({ cover, title }) {
  return (
    <article className="card">
      <img className="card__img" src={cover} alt={title} />
      <div className="card--layer">
        <p className="card--layer__title">{title}</p>
      </div>
    </article>
  )
}
