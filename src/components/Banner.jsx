import React from "react"

export function Banner({ alt, src, className="", children }) {
  return (
    <section className="banner">
      <img alt={alt} src={src} className={"banner__img" + className} />
      { children }
    </section>
  )
}
