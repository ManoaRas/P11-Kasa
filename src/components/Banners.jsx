import homeBanner from "../assets/homeBanner.png"
import aboutBanner from "../assets/aboutBanner.png"

export function HomeBanner() {
  return (
    <section className="banner">
      <img className="banner__img banner--shadow" src={homeBanner} alt="Home Banner" />
      <div className="banner__text">Chez vous, partout et ailleurs</div>
    </section>
  )
}

export function AboutBanner() {
  return (
    <section className="banner">
      <img className="banner__img" src={aboutBanner} alt="About Banner" />
    </section>
  )
}
