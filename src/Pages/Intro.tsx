import {Container, Row, Col} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {assets} from '../assets/assets';
import SocialMedia from '../Components/SocialMedia';
const Intro = () => {
  return (
    <>
      <Row>
        <Col md={8}>
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>
          I am a dedicated web development professional with over 9 years of experience, continually staying updated with the latest technologies. My focus is on creating innovative solutions that enhance performance, meet deadlines, and ensure the successful completion of projects.
          </p>
        </Col>
        <Col md={4}>
          <LazyLoadImage src={assets.developerFace} alt="developer pic" className="img-fluid rounded-circle" style={{ maxHeight: "300px" }} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="home-about-social">
            <h3>FIND ME ON</h3>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <div className="home-social-links">
              <SocialMedia/>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Intro;