import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import Copyright from "./components/Copyright";
import Routes from "./routes";
import Header from "./components/Header";

export default function App() {
  const history = useHistory();
  const [, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        onError(e);
      }
    }
    setIsAuthenticating(false);
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Typography variant="h4" component="h1" gutterBottom>
          Cognito Workflow
        </Typography>
        {isAuthenticated ? (
          <p>authenticated</p>
        ) : (
          <>
            <p>not authenticated</p>
          </>
        )}
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
        <br />
        <Copyright />
      </Container>
    </div>
  );
}
