import React from 'react'
import ServiceCard from "../Cards/ServiceCard"
import { Col } from 'reactstrap'

import weatherImg from '../../assets/images/weather.png'
import guideImg from '../../assets/images/guide.png'
import customizationImg from '../../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eligendi reprehenderit non magni, repellat veritatis blanditiis, placeat voluptatum corrupti modi est, quidem soluta fugit error omnis illum facere natus earum?'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eligendi reprehenderit non magni, repellat veritatis blanditiis, placeat voluptatum corrupti modi est, quidem soluta fugit error omnis illum facere natus earum?'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eligendi reprehenderit non magni, repellat veritatis blanditiis, placeat voluptatum corrupti modi est, quidem soluta fugit error omnis illum facere natus earum?'
    },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => <Col lg='3' key={index}>
        <ServiceCard item={item} />
      </Col>)}
    </>
  )
}

export default ServiceList
