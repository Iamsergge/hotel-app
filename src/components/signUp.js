import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

import hotel1 from '../images/hotel1.jpg';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Registered successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MDBContainer className="my-5 gradient-form d-flex align-items-center justify-content-center">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column align-items-center">
            <p>SignUp using email and password</p>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={register}>
                SignUp
              </MDBBtn>
              <a className="text-muted" href="#!">
                Already have an account
              </a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className="mx-2" color="danger" onClick={register}>
                Login
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col="6" className="mb-5">
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

export default SignUp;
