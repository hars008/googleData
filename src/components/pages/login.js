import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import LoginContext from "../pages/context";

import "./login.css";

  
function Login() {
  const [userData, setUserData] = useState({
    username: undefined,
    password: undefined,
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlechange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handlelogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", userData);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
  };
  console.log(user);
  const registerpage = () => {
    navigate("/register");
  };

  setTimeout(() => {
    const button = document.querySelector('.img__btn');

    button.addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');

    });
  }, 0);
 


  return (
    
    // <br>
    //   <br>
        <div class="cont">
          <div class="form sign-in">
            <h2>Welcome</h2>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" class="submit">Sign In</button>

          </div>
          <div class="sub-cont">
            <div class="img">
              <div class="img__text m--up">

                <h3>Don't have an account? Please Sign up!</h3>
                </div>
                  <div class="img__text m--in">

                    <h3>If you already has an account, just sign in.</h3>
                    </div>
                      <div class="img__btn">
                        <span class="m--up">Sign Up</span>
                        <span class="m--in">Sign In</span>
                      </div>
                  </div>
                  <div class="form sign-up">
                    <h2>Create your Account</h2>
                    <label>
                      <span>Name</span>
                      <input type="text" />
                    </label>
                    <label>
                      <span>Email</span>
                      <input type="email" />
                    </label>
                    <label>
                      <span>Password</span>
                      <input type="password" />
                    </label>
                    <button type="button" class="submit">Sign Up</button>

                  </div>
              </div>
            </div>
          
  );
}

// useEffect(() => {
//   //Runs only on the first render
 
// }, []);
export default Login;
