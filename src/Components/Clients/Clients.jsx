import React from 'react'
import "./scss/clients.css"
import client1 from "../../images/client1.png"
import client2 from "../../images/client2.png"
import client3 from "../../images/client3.svg"
import { Container } from 'react-bootstrap'

const Clients = () => {
  return (
    <Container>
    <section className="client__section">
      <div className="client__main-heading">
        <div className="section__heading">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</div>
      </div>
 
      <div className="client__container">

        <div className="client-info">
          <img className='client1__img' src={client1} alt="client1" />
          <p className='client1 client__name'>Forms On Fire</p>
        </div>

        <div className="client-info">
          <img className='client2' src={client2} alt="client2" />
          <p className='client__name'>ElectroNeek Studio IDE</p>
        </div>

        <div className="client-info">
          <img className='client3' src={client3} alt="client3" />
          <p className='client__name'>Jot form</p>
        </div>

      </div>
    </section>
    </Container>
  )
}

export default Clients
