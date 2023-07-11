import React from 'react'
import "./scss/laurels.css"

import laurel1 from "../../images/laurel1.png";
import laurel2 from "../../images/laurel2.png"
import laurel3 from "../../images/laurel3.png"
import laurel4 from "../../images/laurel4.png"
import { Container } from 'react-bootstrap';

const Laurel = () => {
  return (
    <section className='laurel__section'>

      <div className='laurel__heading'>
        <p className='laurel-link section__heading'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
      </div>

      <Container>
      <div className="laurels__container">

        <div className="laurel1__box">
          <div className="box-top">
            <img className='laurel__img' src={laurel1} alt="laurel img" />
            <p className="lauel__box-heading card__heading">Lorem ipsum dolor sit .</p>
          </div>
          <p className="laurel__box-content">adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim</p>
          <button className='button'>Check Pricing</button>
        </div>

        <div className="laurel2__box">
          <div className="box-top">
            <img className='laurel__img' src={laurel2} alt="laurel img" />
            <p className="lauel__box-heading card__heading">Lorem ipsum dolor sit .</p>
          </div>
          <p className="laurel__box-content">adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse</p>
          <button className='button'>Check Pricing</button>
        </div>

        <div className="laurel3__box">
          <div className="box-top">
            <img className='laurel__img' src={laurel3} alt="laurel img" />
            <p className="lauel__box-heading card__heading">Lorem ipsum dolor sit .</p>
          </div>
          <p className="laurel__box-content">adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim</p>
          <button className='button'>Check Pricing</button>
        </div>

        <div className="laurel4__box">
          <div className="box-top">
            <img className='laurel__img' src={laurel4} alt="laurel img" />
            <p className="lauel__box-heading card__heading">Lorem ipsum dolor sit .</p>
          </div>
          <p className="laurel__box-content">adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse</p>
          <button className='button'>Check Pricing</button>
        </div>

      </div>
      </Container>

    </section>
  )
}

export default Laurel
