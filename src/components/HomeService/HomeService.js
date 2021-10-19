import React from 'react';
import Footer from '../Home/Footer/Footer';
import { Card, Container, Row } from 'react-bootstrap';
import './HomeService.css';
import { Link } from 'react-router-dom';

const HomeService = () => {
  return (
    <div>
      <Container>
        <div className='doctor-heading'>
          <h1>Our Home Service</h1>
        </div>
        <div>
          <h2>Primary care built around you</h2>
          <p>
            We have built a healthcare system where you come first. Because
            nothing is more important than your and your family’s health.
          </p>
        </div>
        <div style={{ margin: '80px 0' }}>
          <Row xs={1} lg={3} md={3} className='g-2'>
            {/* home doctor service */}
            <Card className='home-service'>
              <Card.Img
                className='img-fluid home-img'
                variant='top'
                src='https://i.pinimg.com/originals/d3/f9/13/d3f913b8dd27fac04b26c2c9a903610d.png'
              />
              <Card.Body>
                <Card.Title>Doctors Home Services</Card.Title>
                <Card.Text>
                  you will be treated by caring, internationally trained
                  doctors. They take the time to listen to you and understand
                  your healthcare needs.
                </Card.Text>
                <Link to='/doctors'>
                  <button className='service-button'>Appointment</button>
                </Link>
              </Card.Body>
            </Card>
            {/* home lab service */}
            <Card className='lab-service home-service'>
              <Card.Img
                className='img-fluid home-img'
                variant='top'
                src='https://cdn3.iconfinder.com/data/icons/medical-healthcare-vol-3/48/health_hospital_medical_healthcare_medicalcare_doctor_clinic_physician_physic_Chemistry_laboratory_lab_laboratory_test-512.png'
              />
              <Card.Body>
                <Card.Title>Our Home Lab services</Card.Title>
                <Card.Text>
                  you will be treated by caring, internationally trained
                  doctors. They take the time to listen to you and understand
                  your healthcare needs.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* home report delivery service */}
            <Card className='home-service'>
              <Card.Img
                className='img-fluid home-img'
                variant='top'
                src='https://i.pinimg.com/originals/d3/f9/13/d3f913b8dd27fac04b26c2c9a903610d.png'
              />
              <Card.Body>
                <Card.Title>Report Home Delivery</Card.Title>
                <Card.Text>
                  you will be treated by caring, internationally trained
                  doctors. They take the time to listen to you and understand
                  your healthcare needs.
                </Card.Text>
                <p>Call Us: +01xxxxxxx</p>
                <p>Email: medicalcare@gmail.com</p>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default HomeService;
