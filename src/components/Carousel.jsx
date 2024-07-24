import { useState } from "react"

export function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0)

  const changeSlide = (direction) => {
    setCurrent(
      direction === 'prev'
        ? (current === 0 ? pictures.length - 1 : current - 1)
        : (current === pictures.length - 1 ? 0 : current + 1)
    )
  }
  const prevSlide = () => changeSlide('prev')
  const nextSlide = () => changeSlide('next')

  return (
    <article className="carousel">
      {/* Showing slider navigation buttons */}
      {pictures.length > 1 && (
        <div className="carousel--slider">
          <i
            className="carousel--sliderc fa-solid fa-chevron-left"
            onClick={prevSlide}
          />

          <i
            className="carousel--sliderc fa-solid fa-chevron-right"
            onClick={nextSlide}
          />
        </div>
      )}

      {/* Images */}
      {pictures.map((picture, index) => (
        <picture key={index}>
          {index === current && (
            <>
              <img
                className="carousel__img"
                src={picture}
                alt={`Accommodation ${index + 1}`}
              />
              {pictures.length > 1 && (
                <span className="carousel__nbr">
                  {current + 1} / {pictures.length}
                </span>
              )}
            </>
          )}
        </picture>
      ))}
    </article>
  )
}
