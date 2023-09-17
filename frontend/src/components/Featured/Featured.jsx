import React from 'react'
import locations from '../../data/locations'
import { Col } from "reactstrap"
import LocationCard from "../Cards/LocationCard"

const Featured = () => {
  return (
    <>
      {locations?.map(location => 
        <Col lg='3' className="mb-4" key={location.id}>
          <LocationCard location={location} />
        </Col>
      )}
    </>
  )
}

export default Featured
