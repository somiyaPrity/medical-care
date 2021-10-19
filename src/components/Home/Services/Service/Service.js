import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
  const { id, price, name, rating, img } = props.service;
  return (
    <div>
      <Card className='card-service'>
        <Card.Img className='img-fluid service-img' variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text></Card.Text>

          <p>BDT{price}</p>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol='far fa-star rating-color'
            fullSymbol='fas fa-star rating-color '
          />
          <br />
          <Link to={`/service/${id}`}>
            <button className='service-button'>See Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
