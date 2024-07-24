import { useState } from "react"
import Chevron from "../assets/vector.png"

export default function Collapse(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <article className="collapse">
      <div className="collapse--header" onClick={handleClick}>
        <h2 className="collapse--header__title">{props.title}</h2>
        <img
          className={`chevron ${isExpanded ? "chevron--rotation" : ""}`}
          src={Chevron}
          alt="Chevron"
        />
      </div>

      <div className={isExpanded ? "collapse--expanded" : "collapse--closed"}>
        <p className="collapse--expanded__text">{props.content}</p>
      </div>
    </article>
  )
}
