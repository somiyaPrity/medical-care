import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { DataLoadContext } from '../../../../App';

const Details = () => {
  const { detailsId } = useParams();
  const servicesDate = useContext(DataLoadContext);

  const services = servicesDate[1];

  let serviceData = [];

  for (let service of services) {
    if (service.id == detailsId) {
      serviceData.push(service);
    }
  }
  return (
    <div>
      <Container>
        <div className='doctor-heading'>
          <h1>Details About This Service</h1>
        </div>
        {serviceData.map((service) => (
          <div>
            <img src={service.img} alt='' />
            <h4>{service.name}</h4>
            <p>{service.service}</p>
            <p>More about this service? Call: {service.phone}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Details;
