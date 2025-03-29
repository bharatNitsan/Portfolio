import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import SocialMedia from "./Socialmedia";

const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col md="4">
            <p>Developed and designed By Bharat Makwana</p>
          </Col>
          <Col md="4">
            <p>Copyright © {year} Bharat Makwana</p>
          </Col>
          <Col md="4">
            <SocialMedia/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;