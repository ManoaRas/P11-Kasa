import { useNavigate, useParams } from "react-router-dom"
import accomadations from '../data/accommodation.json'
import { Carousel } from '../components/Carousel'
import { Hosts } from '../components/Hosts'

export function Accommodation() {
  /** Get ID of the accomadation image selected */
  const navigate = useNavigate()
  const { id } = useParams()
  const accomadation = accomadations.find((accomodation) => accomodation.id === id)

  if (!accomadation) return navigate("*")

  const { pictures } = accomadation

  return (
    <section>
      <Carousel pictures={pictures} />
      <Hosts infos={accomadation} />
    </section>
  )
}
