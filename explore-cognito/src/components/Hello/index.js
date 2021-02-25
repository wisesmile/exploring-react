import React, { Component } from "react";
import { Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
class Home extends Component {
  render() {
    return (
      <Box>
        <h2>Hello World!</h2>
        <Link color="inherit" href="/">
          Home
        </Link>
      </Box>
    );
  }
}
export default Home;
