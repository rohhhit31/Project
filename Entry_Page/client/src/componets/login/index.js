import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginStyles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signinGoogle, signin } from "../../redux/actions/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // added state for tracking login status

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //mock login system
  function mockLogin(email, password) {
    const mockEmail = "test@123.com";
    const mockPassword = "test123";

    if (email === mockEmail && password === mockPassword) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const loginSuccess = mockLogin(email, password);
      if (loginSuccess) {
        // Set login status and redirect to dashboard component after successful login
        setLoggedIn(true);
        navigate("/dashboard");
      } else {
        // Display error message for unsuccessful login
        alert("Incorrect email or password");
      }
    }
  }

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(signinGoogle(accessToken, navigate));
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  function renderNav() {
    if (loggedIn) {
      // Render "Hello Admin" if logged in
      return <span>Hello Admin</span>;
    } else {
      // Render "Account" and "Sign up" links if not logged in
      return (
        <>
          <Link to="/account/login">Account Login</Link>
          <Link to="/account/signup">Sign up</Link>
        </>
      );
    }
  }

  return (
    <div className={LoginStyles.loginContainer}>
      <div className={LoginStyles.loginContainerv2}>
        <h1>Welcome back</h1>

        <div className={LoginStyles.inputContainer}>
          <label>EMAIL</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            type="email"
          />
        </div>

        <div className={LoginStyles.inputContainer}>
          <label>PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
            type="password"
          />
        </div>

        <div className={LoginStyles.forgetmeContainer}>
          <div>
            Remember Me <input type="checkbox" />
          </div>
          <div>
            <Link to="/account/forgotpassowrd">Forgot password?</Link>
          </div>
        </div>

        <button onClick={handleSubmit} className={LoginStyles.loginBTN}>
          LOGIN
        </button>
        <span className={LoginStyles.or}>or</span>
        <button onClick={() => login()} className={LoginStyles.googleBTN}>
          <i class="fa-brands fa-google"></i> Sign in with google
        </button>

        <div className={LoginStyles.navContainer}>{renderNav()}</div>
      </div>
    </div>
  );
}

export default Login;

// import React, {useState} from "react";
// import { Link,useNavigate } from "react-router-dom";
// import LoginStyles from "./Login.module.css"
// import {useGoogleLogin} from '@react-oauth/google';
// import {useDispatch} from 'react-redux';
// import {signinGoogle, signin} from "../../redux/actions/auth";

// function Login() {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const navigate = useNavigate ()
//     const dispatch = useDispatch()

//     //mock login sytem
//     function mockLogin(email, password) {
//         const mockEmail = "test@123.com";
//         const mockPassword = "test123";
      
//         if (email === mockEmail && password === mockPassword) {
//           return true;
//         } else {
//           return false;
//         }
//       }

//       function handleSubmit(e) {
//         e.preventDefault();
//         if (email !== "" && password !== "") {
//           const loginSuccess = mockLogin(email, password);
//           if (loginSuccess) {
//             // Redirect to dashboard component after successful login
//             navigate('/dashboard');
//           } else {
//             // Display error message for unsuccessful login
//             alert('Incorrect email or password');
//           }
//         }
//       }
      

//     function handleGoogleLoginSuccess(tokenResponse) {

//         const accessToken = tokenResponse.access_token;

//         dispatch(signinGoogle(accessToken,navigate))
//     }
//     const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

//     // function handleSubmit(e){
//     //     e.preventDefault();
//     //     if(email !== "" && password !== ""){
//     //         dispatch(signin({email,password}, navigate))
//     //     }

//     // }

//     return (
//         <div className={LoginStyles.loginContainer}>
//             <div className={LoginStyles.loginContainerv2}>
//                 <h1>Welcome back</h1>

//                 <div className={LoginStyles.inputContainer}>
//                     <label>EMAIL</label>
//                     <input onChange={e=> setEmail(e.target.value)} placeholder="enter your email" type="email"/>
//                 </div>

//                 <div className={LoginStyles.inputContainer}>
//                     <label>PASSWORD</label>
//                     <input onChange={e=> setPassword(e.target.value)} placeholder="enter your password" type="password"/>
//                 </div>

//                 <div className={LoginStyles.forgetmeContainer}>
//                     <div>
//                         Remember Me <input type="checkbox" />
//                     </div>
//                     <div>
//                         <Link to="/account/forgotpassowrd">Forgot password?</Link>
//                     </div>
//                 </div>

//                 <button onClick={handleSubmit} className={LoginStyles.loginBTN}>LOGIN</button>
//                 <span className={LoginStyles.or}>or</span>
//                  <button onClick={() => login()} className={LoginStyles.googleBTN}>
//                     <i class="fa-brands fa-google"></i>  Sign in with google</button>
                
                    
//                     <span className={LoginStyles.notreg}>Not registered yet?  <Link className={LoginStyles.singupBTN} to="/account/signup">Signup</Link></span>
                    
//             </div>

//         </div>
//     )
// }

// export default Login;