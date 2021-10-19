import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { DataLoadContext } from '../../../App';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const medicalData = useContext(DataLoadContext);
  const doctorsList = medicalData[0];

  return (
    <div>
      <Container className='mt-5'>
        <div className='doctor-heading'>
          <h1>Meet Our Doctors Here</h1>
          <p>Select a doctor for appointment</p>
        </div>
        <Row xs={1} md={4} className='g-4'>
          {doctorsList.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
