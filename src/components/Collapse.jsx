import { useState } from "react"
import Chevron from "../assets/vector.png"

export default function Collapse(props) {
  // Toggle collapse
  const [toggle, setToggle] = useState(false)
  const toggleState = () => {
    setToggle(!toggle)
  }

  return (
    <article className="collapse">
      <div className="collapse--content" onClick={toggleState}>
        <h2 className="collapse--content__title">{props.title}</h2>
        <img className={`chevron ${toggle ? "rotation" : ""}`} src={Chevron} alt="Chevron" />
      </div>

      <div className={`collapse--toggle ${toggle ? "text-visible" : ""}`}>
        <p aria-hidden={toggle ? "true" : "false"} className="collapse--toggle__text">
          {props.content}
        </p>
      </div>
    </article>
  )
}
