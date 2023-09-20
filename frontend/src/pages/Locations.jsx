import React from 'react'
import Common from "../shared/Common"
import LocationCard from "../components/Cards/LocationCard"
import Newsletter from '../shared/Newsletter'
import locationData from '../data/locations'
import { Col, Container, Row } from "reactstrap"
import SearchBar from '../shared/SearchBar'

const Locations = () => {
  return (
    <>
      <Common title={'Our Vacations'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {locationData.map(
              location => 
              <Col lg='3' key={location.id}>
                <LocationCard location={location} />
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Locations
