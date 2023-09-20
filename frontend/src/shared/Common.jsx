import React from 'react'
import '../styles/common.css'
import { Container, Col, Row } from 'reactstrap'

const Common = ({ title }) => {
  return (
    <section className="common">
      <Container>
        <Row>
            <Col lg='12'>
                <h1>{title}</h1>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Common
