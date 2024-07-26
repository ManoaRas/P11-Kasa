import React from "react"
import { Link } from "react-router-dom"
import houses from "../data/accommodation.json"
import { Card } from "../components/Card"
import { HomeBanner } from "../components/Banners"

export function Home() {
  return (
    <>
      <HomeBanner />

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
