import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Projectcard from '../Components/Projectcard';
import projects from '../data/Project';

const Project = () => {
  return (
    <section className='project-section'>
      <Container>
        <div className='text-white text-center mb-4'>
          <h1>All Projects</h1>
          <p>Here are some of the projects I've worked on.</p>
        </div>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} className='project-card col-md-4'>
              <Projectcard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Project;