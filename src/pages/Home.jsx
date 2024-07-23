import { Link } from "react-router-dom";

import banner from '../assets/homeBanner.png'
import Card from '../components/Card'
import data from "../data/logements.json"

export default function Home() {
  return (
    <section>
      <div className="home-banner">
        <img className="home-banner__img" src={banner} alt="Home Banner" />
        <div className="home-banner__text">Chez vous, partout et ailleurs</div>
      </div>

      <div className="cards">
        {data.map((house, id) => (
          <Link className="cards--link" to={`/logement/${house.id}`} key={id}>
            <Card cover={house.cover} title={house.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}
