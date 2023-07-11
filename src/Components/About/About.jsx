import React from 'react'
import "./scss/about.css"

import Wave from "../../UI/Wave"
import { aboutCard } from "../../Constants/data"
import { Card, Col, Container, Row } from 'react-bootstrap'

const AboutCard = ({ about: { title, content } }) => (
  <div className="card">
    <p className='card__heading'>{title}</p>
    <p className='card__content'>{content}</p>
  </div>
)

const About = () => {
  return (
    <section className="about__section">
      
      <Wave className="wave" />

      <Container>
        <div className='about__heading'>
          <p className='section__heading'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
        </div>

        <Row>
          <div className="about__cards">
            {aboutCard.map((about) => <AboutCard about={about} key={about.title} />)}
          </div>
        </Row>
      </Container>

    </section>
  )
}

export default About
