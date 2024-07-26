import React, { useState } from "react"

export function Collapses({ title, content}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="collapse">
      <div className="collapse--header">
        <h2 className="collapse--header__title">{title}</h2>
        <i
          className={`fa-solid fa-chevron-up chevron ${isExpanded ? "rotation" : ""}`}
          onClick={handleClick}
        />
      </div>

      <div className={isExpanded ? "collapse--expanded" : "collapse--closed"}>
        {typeof content === "object" ? (
          <ul className="collapse--list">
            {content.map(function(text, index) {
              return ( <li key={index}> {text}</li> )
            })}
          </ul>
        )
        : (
          <p className="collapse--expanded__text">{content}</p>
        )}
      </div>
    </div>
  )
}
