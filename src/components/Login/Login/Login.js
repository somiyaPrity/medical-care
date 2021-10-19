import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
  const {
    googleSignin,
    loginWithEmailPassword,
    handlePassword,
    handleEmail,
    resetPassword,
    error,
  } = useFirebase();
  return (
    <div className='mt-5'>
      <Container>
        <div className='doctor-heading'>
          <h1>Please Login</h1>
        </div>
        <div className='form-div'>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                onBlur={handleEmail}
                type='email'
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                onBlur={handlePassword}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <p className='text-danger'>{error}</p>
            <Button
              onClick={loginWithEmailPassword}
              className='service-button'
              type='submit'
            >
              Login
            </Button>
          </Form>
          <div>
            <p>or</p>
            <button className='service-button' onClick={googleSignin}>
              Login with <FontAwesomeIcon icon={faGooglePlusG} />
            </button>
            <p>
              New User? <Link to='/register'>Register Here</Link>
            </p>
            <button className='forget-btn' onClick={resetPassword}>
              Forget Password?
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
