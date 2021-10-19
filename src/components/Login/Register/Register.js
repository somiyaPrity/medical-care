import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const {
    handlePassword,
    handleEmail,
    handleName,
    createNewUser,
    error,
    googleSignin,
  } = useAuth();

  return (
    <div>
      <Container>
        <div className='doctor-heading'>
          <h1>Please Signin</h1>
        </div>
        <div className='form-div'>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control
                required
                type='email'
                onBlur={handleEmail}
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                onBlur={handleName}
                type='text'
                required
                placeholder='Enter your name'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              onBlur={handlePassword}
              controlId='formBasicPassword'
            >
              <Form.Control type='password' required placeholder='Password' />
            </Form.Group>

            <br />
            <p className='text-danger'>{error}</p>
            <Button
              className='service-button'
              onClick={createNewUser}
              type='submit'
            >
              Register
            </Button>
          </Form>

          <div>
            <p>or</p>
            <button className='service-button' onClick={googleSignin}>
              Sign in with Google
            </button>
            <p>
              Already have an account?{' '}
              <Link to='/login'>Click here for login</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
