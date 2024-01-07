import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function Input() {
    return (
      <InputStyled>
        <div className="text-section">
        </div>
  
        <div className="input-section">
          <form>
            <input type="text" placeholder="Type input"></input>
            <button>Quiz Me</button>
            <button>Summarize</button>
          </form>
        </div>
      </InputStyled>
    )
  }
  
  const InputStyled = styled.div`
  background-color: #1B1A1A;

  .text-section {
    border: 1px solid grey;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    height: 30vh; // Set a specific height for the text-section to make it taller
  }

  .input-section {
    border: 1px solid grey;
    border-radius: 10px;
    padding: 4px; // Reduced padding from 20px
    margin: 10px;
    height: auto; // Adjusted from 20vh to auto to fit content

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; // Reduced gap from 16px to 10px

    form {
      display: flex;
      gap: 8px; // Reduced gap from 10px to 8px
      width: 100%; // Ensures form takes full width of its container

      input {
        flex-grow: 1; // Allows input to expand and fill available space
        box-sizing: border-box; // Explicitly set box-sizing
        background-color: black;
        border: 1px solid grey;
        border-radius: 5px; // Reduced border-radius for less rounded corners
        padding: 4px; // Reduced padding from 8px for less space around the text
        color: white;
        outline: none;
        font-size: 0.9em; // Optional: Adjust font size if needed

        &::placeholder {
          color: grey;
        }
      }

      button {
        flex-grow: 0; // Prevents buttons from expanding unnecessarily
        padding: 6px 12px; // Adjust button padding as needed
        font-size: 0.9em; // Optional: Adjust font size if needed
      }
    }
  }
`;

export default Input;


