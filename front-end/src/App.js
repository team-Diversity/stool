import React, { useState } from 'react';
import styled from "styled-components";
import { useGlobalContext } from './context/globalContext';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <AppStyled className="App">
      <Navigation className="navigation"></Navigation>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr; // Changed to 'auto' for the nav bar height
  grid-template-columns: 1fr;

  .navigation {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

export default App;
