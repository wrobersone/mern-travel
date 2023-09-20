import React from 'react'
import '../styles/style.css'
import male from '../assets/images/male-tourist.png'
import { Container, Col, Row } from "reactstrap"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe to the newsletter</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="primary__btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore aliquam in amet voluptates veritatis consequatur officia? Quae eligendi aut perspiciatis accusantium corrupti laboriosam, minima, dicta illum cumque, odit fugit!</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={male} alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
