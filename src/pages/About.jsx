import React from "react"

import aboutBanner from "../assets/aboutBanner.png"
import infos from "../data/about.json"

import { Collapses } from "../components/Collapses"
import { Banner } from "../components/Banner"

export function About() {
  return (
    <>
      <Banner alt="About Banner" src={aboutBanner}>
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      </Banner>

      <section className="collapses">
        {infos.map((info, id) => (
          <Collapses content={info.content} key={id} title={info.title} />
        ))}
      </section>
    </>
  )
}
