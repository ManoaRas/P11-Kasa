import React from "react"
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
            <span className="hosts--tags__tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="hosts--left-infos">
        <div className="hosts--profil">
          <p className="hosts--profil__name">{host.name}</p>
          <img alt="hostName" src={host.picture} className="hosts--profil__avatar" />
        </div>

        <div className="hosts--ratings">
          {stars.map(
            (star) => rating >= star ? (
              <i className="fa-solid fa-star" key={star.toString()} />
            )
            : (
              <i className="fa-regular fa-star" key={star.toString()} />
            )
          )}
        </div>
      </div>

      <div className="hosts--description">
        <Collapses content={description} title="Description" />
      </div>

      <div className="hosts--equipement">
        <Collapses content={equipments} title="Équipement" />
      </div>
    </article>
  )
}
