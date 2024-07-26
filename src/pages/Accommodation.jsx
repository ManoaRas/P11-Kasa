import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import accommodations from '../data/accommodation.json'
import { Carousel } from '../components/Carousel'
import { Hosts } from '../components/Hosts'

export function Accommodation() {
  /** Get ID of the accommodation image selected */
  const navigate = useNavigate()
  const { id } = useParams()
  const accommodation = accommodations.find(
    function(accommodation) { return accommodation.id === id }
  )

  if (!accommodation) return navigate("*")

  const { pictures } = accommodation

  return (
    <section>
      <Carousel pictures={pictures} />
      <Hosts infos={accommodation} />
    </section>
  )
}
