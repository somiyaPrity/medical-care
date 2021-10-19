import React, { useContext } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { DataLoadContext } from '../../App';
import './Appointment.css';

const Appointment = () => {
  const { doctorId } = useParams();
  const medicalDate = useContext(DataLoadContext);

  const doctors = medicalDate[0];

  let doctorData = [];

  for (let doctor of doctors) {
    if (doctor.id == doctorId) {
      doctorData.push(doctor);
    }
  }

  console.log(doctorData);
  return (
    <div>
      <Container>
        <div className='doctor-heading'>
          <h1>Book an Appointment</h1>
        </div>
        {doctorData.map((doctor) => (
          <div>
            <h4>
              Make an appointment with{' '}
              <span style={{ color: '#ff6347' }}>{doctor.name}</span> ?
            </h4>
            <div className='appoint-form'>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Control type='text' placeholder='Enter your name' />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Control type='date' />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Control as='textarea' rows={3} placeholder='Comments' />
                </Form.Group>
                <button className='service-button'>Submit</button>
              </Form>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Appointment;
