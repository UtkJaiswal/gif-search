import {app} from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import { auth } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';




function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
    // console.log("CHeck",useNavigate)
  const navigate = useNavigate();
  const auth=getAuth();

    // const check= (e)=>{
    //     e.preventDefault();
    //     // const history = useHistory();
        
    //     // console.log("fjfjf")
    //     navigate("/gif-search");
    // }


  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth,email, password);
      console.log("User logged in");
    //   const history = useNavigate();
    // eslint-disable-next-line 
    //   const navigate = useNavigate();
      navigate('/gif-search');
    //   history.push("/gif-search");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    // const auth2 = getAuth();
    try {
      await createUserWithEmailAndPassword(auth,email2, password2);
      console.log("User signed up");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email2}
          onChange={(event) => setEmail2(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* <button onClick={check}>Click Here</button> */}
    </div>
  );
}

export default LoginForm;
