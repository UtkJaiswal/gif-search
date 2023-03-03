import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
    // console.log("CHeck",auth)
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const auth3=getAuth();
    try {
      await signInWithEmailAndPassword(auth3,email, password);
      console.log("User logged in");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    const auth2 = getAuth();
    try {
      await createUserWithEmailAndPassword(auth2,email2, password2);
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
    </div>
  );
}

export default LoginForm;
