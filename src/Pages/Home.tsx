import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {assets} from '../assets/assets';
import Type from "./Type";
const Home = () => {
  return (
    <section className='home-section-wrap'>
      <div id="home" className='home-section'>
        <Container className='home-content'>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                   👋🏻
                </span>
              </h1>
              <h2 className="heading-name">
                I'M
                <strong className="main-name"> Bharat Makvana</strong>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={assets.devLogo}
                alt="developer pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about" className='home-about-section'>
        <Container className='home-content'></Container>
      </div>
    </section>
  )
}

export default Home;