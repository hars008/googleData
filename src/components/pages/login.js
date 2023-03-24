import React, { useState } from "react";
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
// function Login() {
//   // const [isLogin, setIsLogin] = useState(true);
//   const loginctx=useContext(LoginContext);
//   const [password,setPassword]=useState("");
//   const[email,setEmail]=useState("");

//   const emails =(e)=>{
//     setEmail(e.target.value);
//   }
//   const passwords = (e) => {
//     setPassword(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//     }
//     fetch("http://localhost:80/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     }).then((result) => {
//       result.json().then((resp) => {
//         if (resp) {
//           localStorage.setItem(resp._id,"userid");
//           localStorage.setItem(resp.isAdmin, "userisAdmin");
//           localStorage.setItem(resp.accessToken, "token");
//           console.log("hogya");
//         }
//         else {
//           alert("Something went wrong");
//           console.log("gadbad hogayi");
//         }
//       })
//     })
//   }
  
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
  return (
    // <div className="login-container">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit} className="hi form-signin">
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email asli "
    //       value={email}
    //       onChange={emails}
    //       required
    //       className="form-control"
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={passwords}
    //       required
    //     />

    //     <button type="submit"> Login</button>
    //   </form>
    //   <p>
    //     Don't have an account?
    //     <Link to="/Register" onClick={
    //       ()=>{
    //         loginctx.setLogin();

    //       }}>
    //       Register
    //     </Link>
    //   </p>
    // </div>

    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="8" md="5">
          <img
            src={require("./loginimg.png")}
            className="img-fluid"
            alt="Sample"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn
              floating
              size="md"
              className="me-2"
              style={{ backgroundColor: "#3B5998" }}
            >
              F
            </MDBBtn>

            <MDBBtn
              floating
              size="md"
              className="me-2"
              style={{ backgroundColor: "#dd4b39" }}
            >
              {/* <MDBIcon fab icon='twitter' /> */}G{" "}
            </MDBBtn>
            <MDBBtn
              floating
              size="md"
              className="me-2"
              style={{ backgroundColor: "#0082ca" }}
            >
              Li{" "}
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="User Name"
            id="username"
            onChange={handlechange}
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="password"
            onChange={handlechange}
            type="password"
            size="lg"
          />

          {/* <div className="d-flex justify-content-between mb-4" style={{ color: 'rgb(160, 63, 234)' }} >
                        <MDBCheckbox className='danger' name='flexCheck' value=''  id='flexCheckDefault' label='Remember me' />
                        <a href="!#" style={{ color: 'rgb(160, 63, 234)' }} >Forgot password?</a>
                    </div> */}

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn
              className="mb-0 px-5"
              disabled={loading}
              onClick={handlelogin}
              style={{ backgroundColor: "rgb(160, 63, 234)" }}
              size="lg"
            >
              Login
            </MDBBtn>
            {error && <span>{error.message}</span>}
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <a
                href="#!"
                className="link-dark"
                onClick={
                  registerpage
                  
                }
              >
                Register
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
