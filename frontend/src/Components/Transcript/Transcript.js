import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function Transcript() {
    return (
      <TranscriptStyled>
        <div className="transcript-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis quis ex et rutrum. Sed pharetra eu libero vestibulum semper. Phasellus ornare elementum magna ut dictum. Etiam nec nulla quis elit viverra tincidunt sit amet non sem. Nulla eget luctus elit. Nullam cursus, mauris at placerat sodales, nibh enim rhoncus dolor, vel varius ante tortor id libero. Aenean vitae ligula non nulla fermentum tristique vitae sed sapien. Nunc dictum dui sapien, sit amet blandit neque elementum et. Maecenas aliquet justo quis dictum fringilla. In luctus vehicula pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros diam, egestas scelerisque lectus nec, sollicitudin laoreet quam. Pellentesque lacinia tristique lectus, sit amet faucibus nisi semper quis. Suspendisse varius malesuada condimentum. Sed fermentum neque et massa eleifend elementum. Sed pretium at mauris a dictum. </p>
        </div>
      </TranscriptStyled>
    )
}

const TranscriptStyled = styled.div`
  background-color: #FFFFFF;

  .transcript-section {
    box-sizing: border-box; // Include padding and border in the width
    border: 2px solid #1D4B55; // Darker border
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: calc(100% - 20px); // Adjust for margin only
    height: 90%;
  }
`;

export default Transcript;


