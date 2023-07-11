import React from 'react'
import "./scss/services.css"

import WaveDown from "../../UI/WaveDown"
import { serviceCard } from "../../Constants/data"
import { Container, Row, Col } from 'react-bootstrap'

const ServiceCard = ({ service: { img, title, content } }) => (
  <div className="service-card">
    <img src={img} alt="img" />
    <p className='service-card__heading card__heading mg'>{title}.</p>
    <p className='service-card__content card__content'>{content}</p>
  </div>
)

const Services = () => {
  return (
    <section className="service__section">

      <div className='service__heading'>
        <p className='service__heading-link section__heading'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
      </div>

      <WaveDown />

      <Container>
        <div className="service__cards">
          {serviceCard.map((service) => <ServiceCard service={service} key={service.img} />)}
        </div>
      </Container>

    </section>
  )
}

export default Services
