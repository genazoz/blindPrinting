import React from 'react';
import {ThemeSwitch} from './components';
import Router from "./routes";
import {useSelector} from "react-redux";
import {themeSelector} from "./features/themeSlice";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import FontStyles from "./fonts/fontStyles";

function App() {
  const {theme} = useSelector(themeSelector)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <FontStyles/>
      <ThemeSwitch/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
