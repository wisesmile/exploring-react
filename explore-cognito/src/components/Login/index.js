import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSubmit = (data) => {
    try {
      Auth.signIn(data.username, data.password);
      setIsAuthenticated(true);
      alert("Logged in");
      alert(JSON.stringify(data));
      console.log("form values", data);
    } catch (e) {
      alert("Error");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register} placeholder="Username" />
      <input name="password" ref={register} placeholder="Password" />
      <input type="submit" />
    </form>
  );
}
