import React from 'react'
import './footer.css'
import { Container, Col, ListGroup, ListGroupItem, Row } from "reactstrap"
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'

const footer_links = [
  {
    text: 'Home',
    path: '/home',
  },
  {
    text: 'About Us',
    path: '/aboutus',
  },
  {
    text: 'Locations',
    path: '/locations',
  },
]

const footer_links2 = [
  {
    text: 'Gallery',
    path: '/gallery',
  },
  {
    text: 'Login',
    path: '/login',
  },
  {
    text: 'Register',
    path: '/register',
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi atque totam eius eum cupiditate veritatis</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__links-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {footer_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.text}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__links-title">Info Links</h5>
            <ListGroup className="footer__quick-links">
              {footer_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.text}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__links-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class='ri-map-pin-line'></i></span>
                  Address:
                </h6>
                <p className="mb-0">Los Angeles, CA</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class='ri-mail-line'></i></span>
                  Address:
                </h6>
                <p className="mb-0">email@email.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class='ri-phone-line'></i></span>
                  Phone:
                </h6>
                <p className="mb-0">(800) 345-6789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyright &copy; {year}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
