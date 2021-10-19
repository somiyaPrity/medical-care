import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand as={HashLink} to='#home'>
            Medical Care
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={HashLink} to='/home#home'>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#about'>
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#services'>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to='/doctors'>
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to='/homeService'>
              Home-Service
            </Nav.Link>
            {user.email ? (
              <Navbar.Text>
                <button onClick={logOut} className='log-out'>
                  Logout
                </button>
                <FontAwesomeIcon icon={faUser} />
                <a href='#login'>{user?.displayName}</a>
              </Navbar.Text>
            ) : (
              <Nav.Link as={Link} to='/login'>
                <button className='log-out'>Login</button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
