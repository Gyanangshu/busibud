import React from 'react'
import "./scss/hero.css"
import { Container } from 'react-bootstrap'

import heroImg from "./../../images/heroImg.png"

const Hero = () => {
  return (
    
    <Container>
      <section className="hero__section">

        {/* left para container */}
        <div className="hero__info">
          <p className="hero__heading">Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
          <p className="hero__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.</p>

          <div className="hero__btn">
            <button className='button'>Check Pricing</button>
          </div>
        </div>

        {/* hero image  */}
        <div className="hero__img">
          <img src={heroImg} alt="hero img" />
        </div>

      </section>
    </Container>
  )
}

export default Hero
