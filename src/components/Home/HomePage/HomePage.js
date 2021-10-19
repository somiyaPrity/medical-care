import React, { useContext } from 'react';
import { DataLoadContext } from '../../../App';
import { Container, Row } from 'react-bootstrap';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services/Services';
import Doctor from '../Doctor/Doctor';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const medicalData = useContext(DataLoadContext);
  const doctorsList = medicalData[0].slice(0, 4);
  return (
    <div id='home'>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Container className='my-5'>
        <div>
          <h3 style={{ color: '#ff6347' }}>Meet Our doctors here</h3>

          <Row xs={1} md={4} className='g-4 my-5'>
            {doctorsList.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))}
          </Row>
          <Link to='/doctors'>
            <button className='service-button mb-5'>See More Doctors</button>
          </Link>
        </div>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
