import React from "react"
import homeBanner from "../assets/homeBanner.png"
import aboutBanner from "../assets/aboutBanner.png"

export function HomeBanner() {
  return (
    <section className="banner">
      <img alt="Home Banner" src={homeBanner} className="banner__img banner--shadow" />
      <div className="banner__text">Chez vous, partout et ailleurs</div>
    </section>
  )
}

export function AboutBanner() {
  return (
    <section className="banner">
      <img alt="About Banner" src={aboutBanner} className="banner__img" />
    </section>
  )
}
