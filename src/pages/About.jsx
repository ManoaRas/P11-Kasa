import infos from "../data/about.json"
import { Collapses } from "../components/Collapses"
import { AboutBanner } from "../components/Banners"

export function About() {
  return (
    <>
      <AboutBanner />

      <section className="collapses">
        {infos.map((info, id) => (
          <Collapses key={id} title={info.title} content={info.content} />
        ))}
      </section>
    </>
  )
}
