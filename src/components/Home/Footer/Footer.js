import React from 'react';
import { Container } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faFacebookF } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#ff6347', marginTop: '20px' }}>
      <Container>
        <div className='footer'>
          <div className='footer-address'>
            <h6>Address</h6>
            <p>House-0,Road-2,Block-L</p>
            <p>Banani,Dhaka-1213</p>
          </div>
          <div className='font-icon'>
            <h6>Follow Us:</h6>
            <div>
              {/* <FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
