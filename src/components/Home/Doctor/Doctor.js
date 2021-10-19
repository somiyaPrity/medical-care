import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
  const { id, img, name, degree, visiting_hour } = props.doctor;
  return (
    <div>
      <Card>
        <Card.Img className='img-fluid doctor-img' variant='top' src={img} />
        <Card.Footer>
          <Card.Title ClassName="doctor-name">{name}</Card.Title>
          <Card.Text>
            <p>{degree}</p>
            <p>{visiting_hour}</p>
          </Card.Text>
          <Link to={`/doctor/${id}`}>
            <button className='appoint-btn'>Book an Appointment</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Doctor;
