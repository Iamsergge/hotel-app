import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { useNavigate, useEffect, Link } from 'react-router-dom';

import hotel1 from '../images/hotel1.jpg';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Use this to navigate after successful login

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('You have logged in successfully');
        navigate('/home'); // Navigate to the desired page after login
      })
      .catch((error) => {
        alert('Login failed. Check your credentials.');
      });
  };

  return (
    <div className='login-container'>
      <MDBContainer className='my-5gradient-form'>
        <MDBRow>
          <MDBCol col='6' className='mb-5'>
            <div className='d-flex flex-column ms-5'>
              <p>Please login to your account</p>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='form1'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='form2'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='text-center pt-1 mb-5 pb-1'>
                <MDBBtn className='mb-4 w-100 gradient-custom-2' onClick={handleLogin}>
                  Login
                </MDBBtn>
                <a className='text-muted' href='#!'>
                  Forgot password?
                </a>
              </div>
              <div className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
                <p className='mb-0'>Don't have an account?</p>
                <Link to='/signup'>
                  <MDBBtn outline className='btnbtn-warning' color='danger'>
                    Sign Up
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBCol>
          <MDBCol col='6' className='mb-5'>
            <div className='login-image'>
              <img src={hotel1} className='login-image' alt='img'></img>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
