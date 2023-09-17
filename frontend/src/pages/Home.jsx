import React from 'react'
import '../styles/style.css'
import { Container, Col, Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from "../shared/SearchBar"
import ServiceList from "../components/Services/ServiceList"
import Featured from "../components/Featured/Featured"
import ImageGallery from "../components/Gallery/ImageGallery"
import Testimonials from "../components/Testimonials/Testimonials"
import Newsletter from "../shared/Newsletter"

const Home = () => {
  return (
    <div>
      {/* Heading */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling through open doors to create <span>memories.</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis dignissimos illum, id doloribus culpa possimus et reiciendis, quidem inventore repudiandae, voluptatem nisi maxime aliquam nihil! Consequatur impedit dolorem rerum.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* Services */}
      <section className="services">
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We offer the best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Featured Locations */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__title">Our Featured Locations</h2>
            </Col>
            <Featured />
          </Row>
        </Container>
      </section>

      <section className="experience">
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>With our all experience, <br /> we will serve you </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta praesentium repudiandae ut facere dolore sapiente obcaecati adipisci laudantium tenetur temporibus veniam rem, quo, dolorem voluptatem ipsam iure sequi tempore labore.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2K</span>
                  <h6>Happy Customers</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">View locations our customers visit</h2>
            </Col>
            <Col lg='12'>
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Testimonials'} />
              <h2 className="testimonial__title">What Our Customers Say</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default Home
