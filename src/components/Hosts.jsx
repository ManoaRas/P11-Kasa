import { Collapses } from "../components/Collapses"

export function Hosts({ infos }) {
  const { title, location, tags, host, rating, description, equipments } = infos
  const stars = [1, 2, 3, 4, 5]

  return (
    <article className="hosts">
      <div>
        <h2 className="hosts__title">{title}</h2>
        <p className="hosts__location">{location}</p>

        <div className="hosts--tags">
          {tags.map((tag, index) => (
            <span key={index} className="hosts--tags__tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="hosts--left-infos">
        <div className="hosts--profil">
          <p className="hosts--profil__name">{host.name}</p>
          <img className="hosts--profil__avatar" src={host.picture} alt="hostName" />
        </div>

        <div className="hosts--ratings">
          {stars.map(
            (star) => rating >= star ? (
              <i key={star.toString()} className="fa-solid fa-star" />
            )
            : (
              <i key={star.toString()} className="fa-regular fa-star" />
            )
          )}
        </div>
      </div>

      <div className="hosts--description">
        <Collapses title="Description" content={description} />
      </div>

      <div className="hosts--equipement">
        <Collapses title="Équipement" content={equipments} />
      </div>
    </article>
  )
}
