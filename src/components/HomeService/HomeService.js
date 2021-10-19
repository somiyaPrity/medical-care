import React from 'react';
import Footer from '../Home/Footer/Footer';
import { Container, Row } from 'react-bootstrap';

const HomeService = () => {
  return (
    <div>
      <Container>
        <div className='doctor-heading'>
          <h1>Services</h1>
        </div>
        <Row xs={1} lg={4} md={3} className='g-4'></Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default HomeService;
