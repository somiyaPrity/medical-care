import React from 'react';
import { Container } from 'react-bootstrap';
import './Aboutus.css';
const AboutUs = () => {
  return (
    <div id='about'>
      <Container>
        <div className='about-us'>
          <div className='about-img'>
            <img
              src='https://i.pinimg.com/originals/30/c2/94/30c294bcd33368a4cb9a7c1278f46486.gif'
              alt=''
            />
          </div>
          <div className='about-content'>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              pariatur reprehenderit, ducimus officia fugiat beatae debitis
              fuga, totam possimus voluptate perspiciatis, quam quis. Laborum
              nostrum perspiciatis delectus impedit doloribus officiis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur
              reprehenderit, ducimus officia fugiat beatae debitis fuga, totam
              possimus voluptate perspiciatis, quam quis. Laborum nostrum
              perspiciatis delectus impedit doloribus officiis.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
