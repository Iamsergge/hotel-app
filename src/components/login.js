import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import '../login.css';
import hotel1 from '../images/hotel1.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const authInstance = getAuth();
    signInWithEmailAndPassword(authInstance, email, password)
      .then(() => {
        alert('You have logged in successfully');
        navigate('/home');
      })
      .catch((error) => {
        alert('Login failed. Check your credentials.');
      });
  };

  const handleForgotPassword = () => {
    const authInstance = getAuth();
    sendPasswordResetEmail(authInstance, email)
      .then(() => {
        alert('Password reset email sent. Check your inbox.');
      })
      .catch((error) => {
        alert('Error sending password reset email. Check your email address.');
      });
  };

  return (
    <MDBContainer className='my-5 gradient-form d-flex align-items-center justify-content-center'>
      <MDBRow>
        <MDBCol col='6' className='mb-5'>
          <div className='d-flex flex-column align-items-center'>
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
              <MDBBtn
                className='mb-4 w-100 gradient-custom-2'
                onClick={handleLogin}
              >
                Login
              </MDBBtn>
              <a className='text-muted' href='#!' onClick={handleForgotPassword}>
                Forgot password?
              </a>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
              <p className='mb-0'>Don't have an account?</p>
              <Link to='/signup'>
                <MDBBtn
                  outline
                  className='mx-2'
                  color='danger'
                >
                  Sign Up
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className='mb-5'>
        <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <img src={hotel1} className="" alt="img" />
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
