import { Link } from "react-router-dom"

import banner from "../assets/homeBanner.png"
import houses from "../data/accommodation.json"

import Card from "../components/Card"

export default function Home() {
  return (
    <section>
      <div className="banner">
        <img className="banner__img banner--shadow" src={banner} alt="Home Banner" />
        <div className="banner__text">Chez vous, partout et ailleurs</div>
      </div>

      <div className="cards">
        {houses.map((house, id) => (
          <Link className="cards--link" to={`/accommodation/${house.id}`} key={id}>
            <Card cover={house.cover} title={house.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}
