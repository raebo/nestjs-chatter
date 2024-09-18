import React from 'react';
import {CssBaseline, ThemeProvider, createTheme, Container} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
    }
  })
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </div>
      </ThemeProvider>
    </ApolloProvider>

  )
}

export default App;
