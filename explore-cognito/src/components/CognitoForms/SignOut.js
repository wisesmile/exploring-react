import React, { useState } from "react";
import { Auth } from "aws-amplify";
import FormElement from "./FormElement";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signOut = (e) => {
    e.preventDefault();
    Auth.signOut({ global: true }).catch((err) => {
      console.log("error signing out: ", err);
    });
  };

  return (
    <div className="form">
      <h3>Sign Out</h3>
      <form>
        <button type="submit" onClick={signOut}>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SignIn;
