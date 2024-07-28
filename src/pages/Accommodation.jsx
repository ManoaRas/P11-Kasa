import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import accommodations from '../data/accommodation.json'
import { Carousel } from '../components/Carousel'
import { Hosts } from '../components/Hosts'

export function Accommodation() {
  /** Get ID of the accommodation image selected */
  const navigate = useNavigate()
  const { id } = useParams()
  const accommodation = accommodations.find((accommodation) => (
    accommodation.id === id
  ))

  useEffect(() => {
    if (!accommodation) navigate("*")
  }, [accommodation, navigate])

  if (!accommodation) return null

  const { pictures } = accommodation

  return (
    <section>
      <Carousel pictures={pictures} />
      <Hosts infos={accommodation} />
    </section>
  )
}
