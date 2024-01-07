import React, { useState } from 'react';
import styled from "styled-components";
import { useGlobalContext } from './context/globalContext';
import Navigation from './Components/Navigation/Navigation';
import Input from './Components/Input/Input';
import Video from './Components/Video/Video';
import Transcript from './Components/Transcript/Transcript';

function App() {
  return (
    <AppStyled className="App">
      <div className="container">
        <Navigation className="navigation"></Navigation>
        <div className="middle-section">
          <Video className="video"></Video>
          <Transcript className="transcript"></Transcript>
        </div>
        <Input className="input"></Input>
      </div>
    </AppStyled>
  );
}



const AppStyled = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; // Stack children vertically

    .navigation {
      flex: 0 1 auto; // Adjust size to content
      // Additional styling for navigation...
    }

    .middle-section {
      display: grid;
      grid-template-columns: 1fr 1fr; // Divide the space into two equal columns
      flex-grow: 1; // Allow this section to grow to fill available space
      height: 100%; // Ensure full height
      border: 2px solid grey;

      .video, .transcript {
        // Additional styling as needed
        width: 100%; // Stretch to full width of the column
        border: 2px solid grey;
      }
    }

    .input {
      flex: 0 1 auto; // Adjust size to content
      // Additional styling for input...
    }
  }
`;

export default App;




