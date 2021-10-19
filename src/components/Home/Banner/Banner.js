import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpeg';
import banner2 from '../../../images/banner/banner-2.jpeg';
import banner3 from '../../../images/banner/banner-3.jpeg';
import './Banner.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block banner-img w-100'
          src={banner1}
          alt='First slide'
        />
        <Carousel.Caption>
          <div>
            <h1>
              <span style={{ color: '#ff6347' }}>A</span>ppointment
            </h1>
            <p>Are you looking for a doctor?</p>
            <Link to='/doctors'>
              <button className='common-btn'>Visit Here</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block banner-img w-100'
          src={banner2}
          alt='Second slide'
        />
        <Carousel.Caption>
          <div>
            <h1>
              <span style={{ color: '#ff6347' }}>A</span>ppointment
            </h1>
            <p>Are you looking for a doctor?</p>
            <Link to='/doctors'>
              <button className='common-btn'>Visit Here</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block banner-img w-100'
          src={banner3}
          alt='Third slide'
        />
        <Carousel.Caption>
          <div>
            <h1>
              <span style={{ color: '#ff6347' }}>A</span>ppointment
            </h1>
            <p>Are you looking for a doctor?</p>
            <Link to='/doctors'>
              <button className='common-btn'>Visit Here</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
