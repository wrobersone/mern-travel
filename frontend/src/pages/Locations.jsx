import React, { useState, useEffect } from 'react'
import Common from "../shared/Common"

import LocationCard from "../components/Cards/LocationCard"
import Newsletter from '../shared/Newsletter'
import locationData from '../data/locations'
import { Col, Container, Row } from "reactstrap"
import SearchBar from '../shared/SearchBar'

const Locations = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5/4);
    setPageCount(pages);
  },[page]);

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
      <section className="pt-0">
        <Container>
          <Row>
            {locationData.map(
              location => 
              <Col lg='3' className="mb-4" key={location.id}>
                <LocationCard location={location} />
              </Col>
            )}

            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >{number + 1}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Locations
