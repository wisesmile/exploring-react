import React, { useEffect, useState } from "react";

const fetchUser = async () => {
  const response = await fetch("https://swapi.dev/api/people/1");
  if (!response.ok) {
    throw Error("some useful message");
  }
  return response.json();
};

export const User = () => {
  const [username, setUsername] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchUser()
      .then((user) => {
        setUsername(user.username);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <h2>Error fetching user</h2>;

  return <h1>Welcome, {username}.</h1>;
};
