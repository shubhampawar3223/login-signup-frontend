import React, { useState, useRef } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar.js";
import { Alert } from "reactstrap";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const onDismiss = () => setVisible(false);
  const onDismiss1 = () => setVisible1(false);
  const onDismiss2 = () => setVisible2(false);
  const onDismiss3 = () => setVisible3(false);

  const setStates = async e => {
    e.preventDefault();

    let el = emailRef.current.value.length;
    let pl = passwordRef.current.value.length;
    if ( el === 0 || pl === 0) {
      setVisible(true);
    } else {
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    let postData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(postData);
    const url = "https://signup-login-test.herokuapp.com/login";

    const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(postData) 
  });
  console.log(response.status)
  if(response.status === 200){
     setVisible1(true)
  }
  else if(response.status === 400){
    setVisible3(true)
  }
  else if(response.status === 404){
    setVisible2(true)
  }
    }
  };

  return (
    <div>
      <Navbar />
      <Alert color="danger" isOpen={visible} toggle={onDismiss} fade={false}>
        Please Enter All The Fields.
      </Alert>

      <Alert color="success" isOpen={visible1} toggle={onDismiss1}>
        Login Successfull.
      </Alert>
     
      <Alert color="danger" isOpen={visible2} toggle={onDismiss2}>
        User doesn't exist.  <Link to='/signup'>Register Here!!</Link>
      </Alert>

      <Alert color="danger" isOpen={visible3} toggle={onDismiss3}>
        Incorrect Password!!!.Try again.
      </Alert>

      <div className="container">
        <div className="offset-4 mt-5">
          <div className="form-group border p-2 col-6">
            <input
              ref={emailRef}
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />

            <input
              ref={passwordRef}
              type="text"
              className="form-control mt-2"
              placeholder="Password"
            />

            <button
              className="btn btn-primary form-control mt-3"
              onClick={setStates}
            >
              Login
            </button>
            <div className="mt-2 text-center">
              <Link to='/signup'>Register Here!!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
