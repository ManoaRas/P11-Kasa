import banner from "../assets/aboutBanner.png"
import infos from "../data/about.json"

import Collapse from "../components/Collapse"

export default function About() {
  return (
    <section>
      <div className="banner">
        <img className="banner__img" src={banner} alt="About Banner" />
      </div>

      <div className="collapses">
        {infos.map((info, id) => (
          <Collapse key={id} title={info.title} content={info.content} />
        ))}
      </div>
    </section>
  )
}
