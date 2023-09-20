import React from 'react'
import '../styles/common.css'
import { Container, Col, Row, Form, ListGroup } from "reactstrap"
import locationsData from "../data/locations"
import { useParams } from "react-router-dom"

const LocationDetails = () => {
  const { id } = useParams()
  const location = locationsData.find(location => location.id === id);
  const { image, title, desc, price, reviews, city, distance, maxGroupSize } = location
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="location__content">
                <img src={image} alt="" />
                <div className="location__info">
                  <h2>{title}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default LocationDetails
