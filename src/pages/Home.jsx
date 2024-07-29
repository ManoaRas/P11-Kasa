import React from "react"
import { Link } from "react-router-dom"

import homeBanner from "../assets/homeBanner.png"
import houses from "../data/accommodation.json"

import { Card } from "../components/Card"
import { Banner } from "../components/Banner"

export function Home() {
  return (
    <>
      <Banner alt="Home Banner" src={homeBanner} className=" banner--shadow">
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      </Banner>

      <section className="cards">
        {houses.map((house, index) => (
          <Link className="cards--link" key={index} to={`/accommodation/${house.id}`}>
            <Card cover={house.cover} title={house.title} />
          </Link>
        ))}
      </section>
    </>
  )
}
