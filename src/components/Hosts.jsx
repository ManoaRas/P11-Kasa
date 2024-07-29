import React from "react"
import { Collapses } from "../components/Collapses"
import { Tags } from "../components/Tags"

export function Hosts({ infos }) {
  const { title, location, tags, host, rating, description, equipments } = infos
  const stars = [1, 2, 3, 4, 5]

  return (
    <article className="hosts">
      <div>
        <h1 className="hosts__title">{title}</h1>
        <p className="hosts__location">{location}</p>

        <div className="hosts--tags">
          {tags.map((tag, index) => (
            <Tags key={index} tag={tag} />
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
        <Collapses title="Description">
          <p className="collapse--expanded__text">{description}</p>
        </Collapses>
      </div>

      <div className="hosts--equipement">
        <Collapses title="Équipement">
          <ul className="collapse--list">
            {equipments.map(function(text, index) {
              return ( <li key={index}> {text}</li> )
            })}
          </ul>
        </Collapses>
      </div>
    </article>
  )
}
