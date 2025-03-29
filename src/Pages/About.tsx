import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {

  const techStack = [
    {
      id: 1,
      name: 'HTML',
      icon: 'html.svg'
    },
    {
      id: 2,
      name: 'CSS',
      icon: 'css.svg'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: 'js.svg'
    },
    {
      id: 4,
      name: 'Sass',
      icon: 'scss.svg'
    },
    {
      id: 4,
      name: 'React',
      icon: 'react.svg'
    },
    {
      id: 5,
      name: 'Node.js',
      icon: 'nodejs.svg'
    },
    {
      id: 6,
      name: 'Git',
      icon: 'git.svg'
    },
  ]

  const tools = [
    {
      id: 1,
      name: 'Mac Os',
      icon: 'mac-os.svg'
    },
    {
      id: 2,
      name: 'Cursor',
      icon: 'cursor.svg'
    },
    {
      id: 3,
      name: 'VS Code',
      icon: 'vs-code.svg'
    },
  ]

  return (
    <section className='about-section'>
      <Container>
        <Row>
          <Col md={7} className='about-header'>
            <h1>About Me</h1>
            <p>
              Hi Everyone,  <strong>I'm Bharat Makvana</strong> <br/>
              I am a dedicated web development professional with over 9 years of experience, continually staying updated with the latest technologies. My focus is on creating innovative solutions that enhance performance, meet deadlines, and ensure the successful completion of projects.
            </p>
          </Col>
        </Row>

        <h2 className='tech-stack-heading text-center mt-5 mb-4'>Professional <span className='primary-color'>Tech Stack</span></h2>
        <Row className='mb-5'>
          {techStack.map((tech) => (
            <Col key={tech.id} md={2} className='tech-icons col-md-2 col-4'>
              <img src={`src/assets/tech-stack/${tech.icon}`} alt={tech.name} />
            </Col>
          ))}
        </Row>

        <h3 className='h2 tech-stack-heading text-center mt-5 mb-4'><span className='primary-color'>Tools</span> I use </h3>
        <Row className='mb-5'>
          {tools.map((tool) => (
            <Col key={tool.id} md={2} className='tech-icons col-md-2 col-4'>
              <img src={`src/assets/tech-tools/${tool.icon}`} alt={tool.name}  title={tool.name}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default About;