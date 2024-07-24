import { useState } from "react"
import Chevron from "../assets/vector.png"

export function Collapses({ title, content}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="collapse">
      <div className="collapse--header">
        <h2 className="collapse--header__title">{title}</h2>
        <img
          className={`collapse--header--chevron ${isExpanded ? "rotation" : "chevron"}`}
          src={Chevron}
          alt="Chevron"
          onClick={handleClick}
        />
      </div>

      <div className={isExpanded ? "collapse--expanded" : "collapse--closed"}>
        {typeof content === "object" ? (
          <ul className="collapse--list">
            {content.map((text, index) => (
              <li key={index}> {text}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse--expanded__text">{content}</p>
        )}
      </div>
    </div>
  )
}
