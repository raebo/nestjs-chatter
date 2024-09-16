import React from 'react';
import {CssBaseline, ThemeProvider, createTheme, Container} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
    }
  })
function App() {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  </ThemeProvider>
}

export default App;
