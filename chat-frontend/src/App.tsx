import React from 'react';
import {CssBaseline, ThemeProvider, createTheme, Container} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";

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
            <Guard>
              <RouterProvider router={router} />

            </Guard>
          </Container>
        </div>
      </ThemeProvider>
    </ApolloProvider>

  )
}

export default App;
