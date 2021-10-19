import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { DataLoadContext } from '../../../../App';
import Service from '../Service/Service';

const Services = () => {
  const Data = useContext(DataLoadContext);
  console.log(Data);
  const services = Data[1];
  console.log(services);
  return (
    <div id='services'>
      <Container className='mt-5'>
        <div className='doctor-heading'>
          <h1>Services</h1>
        </div>
        <Row xs={1} lg={4} md={3} className='g-4'>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
