import React from 'react'
import './card.css'
import { Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import { PiMapPinLight } from 'react-icons/pi'
import calculateAvgRating from '../../utils/avgRating'

const LocationCard = ({ location }) => {
  const { id, title, city, image, price, featured, reviews } = location

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="location__card">
      <Card>
        <div className="location__img">
          <img src={image} alt="location-img" />
          { featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="location__place d-flex align-items-center gap-1">
              <PiMapPinLight /> {city}
            </span>
            <span className="location__rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} {totalRating === 0 ? 'No Rating' : <span>({reviews.length})</span>} 
            </span>
          </div>

          <h5 className="location__title">
            <Link to={`/locations/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>per person</span> </h5>
            <button className="btn booking__btn">
              <Link to={`/locations/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>

    </div>
  )
}

export default LocationCard
